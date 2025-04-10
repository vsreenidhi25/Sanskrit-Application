"use client";

import React from "react";
import Link from "next/link";

interface Book {
  title: string;
  coverImage: string;
  purchaseUrl: string;
}

const bookData: Book[] = [
    {
        title: "Learn Sanskrit in 30 Days-by K Srinivasachari (Author)",
        coverImage: "https://m.media-amazon.com/images/I/618Lsy7AfvL._SY466_.jpg",
        purchaseUrl: "https://amzn.in/d/h9ZKdLF",
      },
  {
    title: "Shlokas and Mantras For Kids Illustrated Padded Board Book Learn",
    coverImage: "https://m.media-amazon.com/images/I/81r2q3SMrBL._SY342_.jpg",
    purchaseUrl: "https://amzn.in/d/cPWx9s6",
  },
  {
    title: "Hanuman Chalisa Pocket Book (Hindi, Roman Hindi, Hardbound)",
    coverImage: "https://m.media-amazon.com/images/I/71ln7b8GwjL._SL1080_.jpg",
    purchaseUrl: "https://amzn.in/d/gfT7xVk",
  },
];

const BuyBooksPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-100 py-12 px-4 sm:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            📚 Sanskrit Learning Books
          </span>
        </h1>
        <p className="mt-3 text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Discover our curated collection of Sanskrit books. Click to purchase from trusted stores.
        </p>
      </div>

      {/* Book Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookData.map((book, index) => (
          <a
            key={index}
            href={book.purchaseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-orange-100 hover:border-orange-300"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-48 h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <p className="mt-5 text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 text-center">
              {book.title}
            </p>
            <span className="mt-2 inline-block px-4 py-1 text-sm text-orange-600 bg-orange-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Buy Now
            </span>
          </a>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-12">
        <Link href="/books">
          <button className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg">
            Back to Books Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BuyBooksPage;