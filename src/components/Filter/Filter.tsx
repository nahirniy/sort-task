import { ChangeEvent, FC } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

interface FilterProps {
  updateCategory: (category: string) => void;
  updatePriceUp: (priceUp: boolean) => void;
  priceUp: boolean;
}

const Filter: FC<FilterProps> = ({
  updateCategory,
  updatePriceUp,
  priceUp,
}) => {
  const sortByCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentFilter = e.target.value;

    updateCategory(currentFilter);
  };

  const sortByPrice = () => updatePriceUp(!priceUp);

  return (
    <div className='p-2 mb-6 w-full flex justify-between items-center shadow-md rounded-md bg-white'>
      <p
        className='flex gap-1 items-center font-medium cursor-pointer'
        onClick={sortByPrice}>
        Price
        {priceUp ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
      </p>

      <select className='p-2 rounded-md' onChange={(e) => sortByCategory(e)}>
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
