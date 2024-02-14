import { IBook } from "types/types";
import FilterByCategory from "./FilterByCategory/FilterByCategory";
import FilterByPrice from "./FilterByPrice/FilterByPrice";
import { FC } from "react";

interface FilterProps {
  updateFilter: (filter: string) => void;
  books: IBook[];
}

const Filter: FC<FilterProps> = ({ updateFilter, books }) => {
  return (
    <div className='p-2 mb-6 w-full flex justify-between items-center shadow-md rounded-md bg-white'>
      <FilterByPrice updateFilter={updateFilter} />
      <FilterByCategory updateFilter={updateFilter} books={books} />
    </div>
  );
};

export default Filter;
