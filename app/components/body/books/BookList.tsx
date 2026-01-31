import { BookCard } from "./BookCard";
import { Book } from "./../../../types/Book";

export default function BookList({ bookList }: { bookList: Book[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full place-items-center sm:place-items-stretch">
      {bookList.map((book) => (
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
  );
}
