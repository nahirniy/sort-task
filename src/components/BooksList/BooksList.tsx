import { FC } from "react";
import { IBook } from "types/types";
import BooksItem from "./BookItem";

interface BooksListProps {
  filteredByCategory: () => IBook[];
  filteredByPrice: () => IBook[];
}

const BooksList: FC<BooksListProps> = ({
  filteredByCategory,
  filteredByPrice,
}) => {
  const books = filteredByPrice();

  console.log(books);

  const elements = books.map((book, index) => (
    <BooksItem key={book.id} book={book} index={index} />
  ));

  return <ul className='mb-6'>{elements}</ul>;
};

export default BooksList;
