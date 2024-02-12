import { FC } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className='mx-auto mt-12 p-12 flex justify-center  max-w-[600px] min-h-[500px] bg-gray-200 rounded-lg shadow-xl'>
      <div className='w-[250px]'>
        <h1 className='text-4xl font-bold mb-6'>Books</h1>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
