import { useState, useEffect } from "react";
import addToCart from "/assets/images/icon-add-to-cart.svg";

const Desserts = () => {
  const [dessertLists, setDessertLists] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDesserts = async () => {
      try {
        setIsFetching(true);

        const response = await fetch("/data.json");
        const resData = await response.json();
        // console.log(resData);

        if (!response.ok) {
          throw new Error("Failed to fetch desserts");
        }

        setDessertLists(resData);
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
    <main className="font-redHat text-rose900">
      <section>
        {isFetching && <p>Fetching desserts lists...</p>}
        {!isFetching && !error && (
          <ul>
            {dessertLists.map((dessert) => {
              return (
                <li key={dessert.name} className="mt-8">
                  <div className="relative flex flex-col">
                    <img
                      src={dessert.image.mobile}
                      alt="Waffle with Berries"
                      className="rounded-md"
                    />
                    <button className="absolute -bottom-5 font-redHat600 text-rose900 text-sm bg-rose50 flex self-center justify-self-center px-6 py-[10px] border border-rose300 rounded-full">
                      <img
                        src={addToCart}
                        alt="icon-add-to-cart"
                        className="mr-2"
                      />
                      Add to Cart
                    </button>
                  </div>
                  <div className="leading-7 mt-6">
                    <p className="text-rose400">{dessert.category}</p>
                    <h3 className="text-rose900 font-redHat600">
                      {dessert.name}
                    </h3>
                    <p className="text-red font-redHat600">
                      ${dessert.price.toFixed(2)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </main>
  );
};

export default Desserts;
