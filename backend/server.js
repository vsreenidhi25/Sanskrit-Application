const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Allow frontend access
    methods: ["GET", "POST"]
  }
});

app.use(cors());

let messages = []; // Store messages in memory

io.on("connection", (socket) => {
  console.log("A user connected");

  // Send existing messages to the new user
  socket.emit("loadMessages", messages);

  socket.on("message", (message) => {
    messages.push(message);

    // Remove messages older than 24 hours
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    messages = messages.filter((msg) => new Date(msg.timestamp).getTime() > oneDayAgo);

    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});
