import { useState } from "react";
import BooksList from "./BooksList/BooksList";
import Filter from "./Filter/Filter";
import TotalPrice from "./TotalPrice/TotalPrice";
import Wrapper from "./Wrapper/Wrapper";
import books from "data/books.json";
import { IBook } from "types/types";

const App = () => {
  const [category, setCategory] = useState("default");
  const [priceUp, setPriceUp] = useState(false);

  const updateCategory = (newCategory: string) => setCategory(newCategory);
  const updatePriceUp = (newPriceUp: boolean) => setPriceUp(newPriceUp);

  const filteredByCategory = (): IBook[] => {
    if (category === "default") return books;

    return books.filter(({ category: genre }) => category.includes(genre));
  };

  const filteredByPrice = (): IBook[] => {
    return books.sort((a, b) =>
      priceUp ? b.price - a.price : a.price - b.price
    );
  };

  return (
    <Wrapper>
      <Filter
        updateCategory={updateCategory}
        updatePriceUp={updatePriceUp}
        priceUp={priceUp}
      />
      <BooksList
        filteredByCategory={filteredByCategory}
        filteredByPrice={filteredByPrice}
      />
      <TotalPrice />
    </Wrapper>
  );
};

export default App;
