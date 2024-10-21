import ProductList from "./components/ProductList";
// import Header from "../src/components/Header";
import { DessertCartContextProvider } from "./components/store/dessert-cart-context";

const App = () => {
  return (
    <DessertCartContextProvider>
      {/* <Header /> */}

      <ProductList />
    </DessertCartContextProvider>
  );
};

export default App;
