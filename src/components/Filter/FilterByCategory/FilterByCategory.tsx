import { FILTER_DEFAULT } from "components/App";
import ResetButton from "components/ResetButton/ResetButton";
import React, { ChangeEvent, FC, useState } from "react";
import { IBook } from "types/types";

interface FilterByCategoryProps {
  updateFilter: (filter: string) => void;
  books: IBook[];
}

const FilterByCategory: FC<FilterByCategoryProps> = ({
  books,
  updateFilter,
}) => {
  const [category, setCategory] = useState(FILTER_DEFAULT);

  const sortByCategory = (e: ChangeEvent<HTMLSelectElement>): void => {
    const currentFilter = e.target.value;

    updateFilter(currentFilter);
    setCategory(currentFilter);
  };

  const resetFilter = () => {
    if (category === FILTER_DEFAULT) return;

    updateFilter(FILTER_DEFAULT);
    setCategory(FILTER_DEFAULT);
  };

  const elements = books.map(({ category, id }) => (
    <option key={id} value={category}>
      {category}
    </option>
  ));

  return (
    <div className='flex gap-2'>
      <ResetButton reset={resetFilter} />
      <select
        value={category}
        className='p-2 rounded-md cursor-pointer'
        onChange={(e) => sortByCategory(e)}>
        <option value='default'>all books</option>
        {elements}
      </select>
    </div>
  );
};

export default FilterByCategory;
