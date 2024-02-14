import React, { FC, useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { Price } from "types/types";

interface FilterByPriceProps {
  updateFilter: (filter: string) => void;
}

const FilterByPrice: FC<FilterByPriceProps> = ({ updateFilter }) => {
  const [price, setPrice] = useState(Price.PRICE_UP);

  const priceUp = price === Price.PRICE_UP;

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
    <p
      className='flex gap-1 items-center font-medium cursor-pointer'
      onClick={sortByPrice}>
      Price
      {priceUp ? <FaArrowAltCircleUp /> : <FaArrowAltCircleDown />}
    </p>
  );
};

export default FilterByPrice;
