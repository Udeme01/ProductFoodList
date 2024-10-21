import { useState, useEffect } from "react";
import { dessertsData } from "../http";

import Header from "./Header";
import Cart from "./Cart";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [dessertLists, setDessertLists] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDesserts = async () => {
      try {
        setIsFetching(true);
        const fetchData = await dessertsData();
        setDessertLists(fetchData);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        setError({
          message:
            error.message ||
            "Could not fetch desserts, please try again later. ",
        });
        setIsFetching(false);
      }
      //   setIsFetching(false);
    };

    fetchDesserts();
  }, []);

  return (
    <main className="bg-rose100">
      <section className="p-6 min-h-screen lg:flex lg:gap-6 xl:w-[85%] xl:mx-auto">
        <section>
          <Header />
          {isFetching && (
            <p className="text-center text-lg">
              Fetching desserts lists... Please wait...
            </p>
          )}
          {!isFetching && !error && (
            <ul className="grid sm:grid-cols-2 sm:gap-6 md:grid-cols-3 font-redHat lg:w-full">
              {dessertLists.map((dessert) => (
                <ProductItem key={dessert.name} dessert={dessert} />
              ))}
            </ul>
          )}
        </section>
        <Cart title={`Your Cart (${0})`} />
      </section>
    </main>
  );
};

export default ProductList;
