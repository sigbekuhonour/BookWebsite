"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { BookCard } from "./BookCard";
import { Book } from "./../../types/Book";

export default function BookList({ bookList }: { bookList: Book[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = bookList.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="relative max-w-md w-full mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-input rounded-full leading-5 bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out shadow-sm"
          placeholder="Search for your next read..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredBooks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full place-items-center sm:place-items-stretch animate-in fade-in slide-in-from-bottom-4 duration-500">
          {filteredBooks.map((book) => (
            <div key={book.id} className="w-full h-full">
              <BookCard
                id={book.id}
                title={book.title}
                price={book.price}
                noOfStock={book.noOfStock}
                imageUrl={book.imageUrl}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No books found matching "{searchQuery}"
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-4 text-sm text-primary hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
