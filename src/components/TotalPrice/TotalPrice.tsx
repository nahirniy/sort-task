import { FC } from "react";

interface TotalPriceProps {
  totalPrice: number;
}

const TotalPrice: FC<TotalPriceProps> = ({ totalPrice }) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='font-bold'>Total Count:</p>
      <p>{totalPrice}$</p>
    </div>
  );
};

export default TotalPrice;
