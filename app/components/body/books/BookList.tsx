import { BookCard } from "./BookCard";
import { Book } from "./../../../types/Book";

export default function BookList({ bookList }: { bookList: Book[] }) {
  return (
    <div className="grid grid-flow-col grid-rows-2 md:flex md:flex-row pb-10 overflow-x-auto w-full gap-6">
      {bookList.map((book) => (
        <div key={book.id}>
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
