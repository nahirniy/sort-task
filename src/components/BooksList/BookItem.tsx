import { FC } from "react";
import { IBook } from "types/types";

interface BookProps {
  book: IBook;
  updateTotalPrice: (newTotalPrice: number) => void;
}

const BooksItem: FC<BookProps> = ({ book, updateTotalPrice }) => {
  const { id, name, price } = book;

  return (
    <li
      className='p-2 flex justify-between border border-solid border-black cursor-pointer'
      onClick={() => updateTotalPrice(price)}>
      <p>
        <span className='mr-1'>{id}</span>
        <span>{name}</span>
      </p>
      <p>{price}$</p>
    </li>
  );
};

export default BooksItem;
