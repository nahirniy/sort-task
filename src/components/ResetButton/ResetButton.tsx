import React, { FC } from "react";

interface ResetButtonProps {
  reset: () => void;
}

const ResetButton: FC<ResetButtonProps> = ({ reset }) => {
  return (
    <button
      className='text-sm border border-solid border-black p-2 rounded-md'
      onClick={reset}>
      Reset
    </button>
  );
};

export default ResetButton;
