import { ChangeEvent, FC, useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { Price } from "types/types";

interface FilterProps {
  updateFilter: (filter: string) => void;
  filter: string;
}

const Filter: FC<FilterProps> = ({ updateFilter, filter }) => {
  const [price, setPrice] = useState(Price.PRICE_UP);

  const priceUp = price === Price.PRICE_UP;

  const sortByCategory = (e: ChangeEvent<HTMLSelectElement>): void => {
    const currentFilter = e.target.value;

    updateFilter(currentFilter);
  };

  const sortByPrice = (): void => {
    if (price === Price.PRICE_UP) {
      setPrice(Price.PRICE_DOWN);
      updateFilter(Price.PRICE_DOWN);

      return;
    }

    setPrice(Price.PRICE_UP);
    updateFilter(Price.PRICE_UP);
  };

  return (
    <div className='p-2 mb-6 w-full flex justify-between items-center shadow-md rounded-md bg-white'>
      <p
        className='flex gap-1 items-center font-medium cursor-pointer'
        onClick={sortByPrice}>
        Price
        {priceUp ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
      </p>

      <select
        className='p-2 rounded-md cursor-pointer'
        onChange={(e) => sortByCategory(e)}>
        <option value='default'>all books</option>
        <option value='animals'>animals</option>
        <option value='tourizm'>tourizm</option>
        <option value='parfum'>parfum</option>
        <option value='music'>music</option>
        <option value='food'>food</option>
      </select>
    </div>
  );
};

export default Filter;
