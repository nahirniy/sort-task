import BooksList from "./BooksList/BooksList";
import Filter from "./Filter/Filter";
import TotalPrice from "./TotalPrice/TotalPrice";
import Wrapper from "./Wrapper/Wrapper";
import books from "data/books.json";

const App = () => {
  return (
    <Wrapper>
      <Filter />
      <BooksList books={books} />
      <TotalPrice />
    </Wrapper>
  );
};

export default App;
