import { FC } from "react";
import { IBook } from "types/types";
import BooksItem from "./BookItem";

interface BooksListProps {
  books: IBook[];
}

const BooksList: FC<BooksListProps> = ({ books }) => {
  const elements = books.map(({ id, name, price }) => (
    <BooksItem key={id} id={id} name={name} price={price} />
  ));

  return <ul className='mb-6'>{elements}</ul>;
};

export default BooksList;
