import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Filter = () => {
  return (
    <div className='p-2 mb-6 w-full flex justify-between items-center shadow-md rounded-md bg-white'>
      <p className='flex gap-1 items-center font-medium cursor-pointer'>
        Price <FaArrowAltCircleUp />
      </p>
      <select className='p-2 rounded-md'>
        <option value=''>animals</option>
        <option value=''>tourizm</option>
        <option value=''>parfum</option>
        <option value=''>music</option>
        <option value=''>food</option>
      </select>
    </div>
  );
};

export default Filter;
