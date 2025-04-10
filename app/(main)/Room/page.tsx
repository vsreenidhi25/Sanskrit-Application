"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";

// Define Message Interface
interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
}

// Create socket connection
const socket = io("http://localhost:4000");

export default function ChatRoom() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [isNameSet, setIsNameSet] = useState(false); // ✅ Ensures name is set before chatting

  useEffect(() => {
    const handleMessage = (message: Message) => {
      setMessages((prev) => [...prev, message]);
    };

    const handleLoadMessages = (loadedMessages: Message[]) => {
      setMessages(loadedMessages);
    };

    socket.on("message", handleMessage);
    socket.on("loadMessages", handleLoadMessages);

    return () => {
      socket.off("message", handleMessage);
      socket.off("loadMessages", handleLoadMessages);
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() && isNameSet) {
      const message: Message = {
        id: Date.now().toString(),
        sender: name,
        text: input,
        timestamp: new Date().toISOString(),
      };
      socket.emit("message", message);
      setInput("");
    }
  };

  const submitName = () => {
    if (name.trim().length > 0) {
      setIsNameSet(true); // ✅ Now locks the name only when user submits
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 font-bold text-lg">Chat Room</div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === name ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                msg.sender === name ? "bg-green-500 text-white" : "bg-white text-black"
              } shadow-md`}
            >
              <div className="text-lg font-bold">{msg.sender}</div>
              <div>{msg.text}</div>
              <div className="text-xs text-black text-right"> {/* ✅ Changed time to black */}
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="p-3 bg-white flex gap-2">
        {!isNameSet ? (
          <>
            <input
              className="p-2 border rounded flex-1"
              placeholder="Enter your full name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
            />
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={submitName} // ✅ Only submit when button is clicked
            >
              Set Name
            </button>
          </>
        ) : (
          <div className="p-2 font-bold">{name}</div> // ✅ Keeps full name
        )}
        <input
          className="p-2 border rounded flex-1"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="p-2 bg-green-500 text-white rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
