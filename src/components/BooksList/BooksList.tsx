import { FC } from "react";
import { IBook } from "types/types";
import BooksItem from "./BooksItem/BookItem";

interface BooksListProps {
  filteredBooks: () => IBook[];
  updateTotalPrice: (newTotalPrice: number) => void;
}

const BooksList: FC<BooksListProps> = ({ filteredBooks, updateTotalPrice }) => {
  const books = filteredBooks();

  const elements = books.map((book) => (
    <BooksItem key={book.id} book={book} updateTotalPrice={updateTotalPrice} />
  ));

  return <ul className='mb-6'>{elements}</ul>;
};

export default BooksList;
