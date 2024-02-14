import ResetButton from "components/ResetButton/ResetButton";
import { FC } from "react";

interface TotalPriceProps {
  totalPrice: number;
  updateTotalPrice: (price: number) => void;
}

const TotalPrice: FC<TotalPriceProps> = ({ totalPrice, updateTotalPrice }) => {
  const resetTotalPrice = () => {
    if (totalPrice === 0) return;

    updateTotalPrice(-totalPrice);
  };

  return (
    <div className='flex  gap-2'>
      <p className='font-bold'>Total Count: {totalPrice}$</p>
      <ResetButton reset={resetTotalPrice} />
    </div>
  );
};

export default TotalPrice;
