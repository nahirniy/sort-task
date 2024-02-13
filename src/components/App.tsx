import { useState } from "react";
import BooksList from "./BooksList/BooksList";
import Filter from "./Filter/Filter";
import TotalPrice from "./TotalPrice/TotalPrice";
import Wrapper from "./Wrapper/Wrapper";
import books from "data/books.json";
import { IBook, Price } from "types/types";

const FILTER_DEFAULT = "default";

const App = () => {
  const [filter, setFilter] = useState(FILTER_DEFAULT);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateFilter = (newFilter: string) => setFilter(newFilter);
  const updateTotalPrice = (price: number) =>
    setTotalPrice((prevPrice) => prevPrice + price);

  const filteredByPrice = (): IBook[] => {
    return books.sort((a, b) =>
      filter === Price.PRICE_UP ? b.price - a.price : a.price - b.price
    );
  };

  const filteredBooks = (): IBook[] => {
    if (filter === FILTER_DEFAULT) return books;

    if (filter === Price.PRICE_UP || filter === Price.PRICE_DOWN) {
      return filteredByPrice();
    }
    return books.filter(({ category: genre }) => filter.includes(genre));
  };

  return (
    <Wrapper>
      <Filter updateFilter={updateFilter} filter={filter} />
      <BooksList
        filteredBooks={filteredBooks}
        updateTotalPrice={updateTotalPrice}
      />
      <TotalPrice totalPrice={totalPrice} />
    </Wrapper>
  );
};

export default App;
