import { FC } from "react";
import { IBook } from "types/types";

interface BookProps {
  book: IBook;
  index: number;
}

const BooksItem: FC<BookProps> = ({ book, index }) => {
  const { id, name, price } = book;

  return (
    <li
      className='p-2 flex justify-between border border-solid border-black'
      data-id={id}>
      <p>
        <span className='mr-1'>{index + 1}</span>
        <span>{name}</span>
      </p>
      <p>{price}$</p>
    </li>
  );
};

export default BooksItem;
