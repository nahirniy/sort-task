import { FC } from "react";
import { IBook } from "types/types";

const BooksItem: FC<IBook> = ({ id, name, price, category }) => {
  return (
    <li
      className='p-2 flex justify-between border border-solid border-black'
      data-id={id}>
      <p>
        <span className='mr-1'>{id}</span>
        <span>{name}</span>
      </p>
      <p>{price}$</p>
    </li>
  );
};

export default BooksItem;
