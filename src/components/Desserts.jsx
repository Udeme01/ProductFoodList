import { useState, useEffect } from "react";
import waffleImg from "../assets/images/image-waffle-mobile.jpg";
import addToCart from "../assets/images/icon-add-to-cart.svg";

// import { fetchDesserts } from "../http";

const Desserts = () => {
  const [dessertLists, setDessertLists] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchDesserts = async () => {
      try {
        setIsFetching(true);

        const response = await fetch("http://localhost:5173/data.json");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch desserts");
        }

        console.log(resData);
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
    <main className="font-redHat text-rose900 m-6">
      <h1 className="font-redHat700 text-4xl my-8">Desserts</h1>

      <section>
        <ul>
          {isFetching && <p>Fetching desserts lists...</p>}
          {!isFetching && (
            <li>
              <div className="relative flex flex-col">
                <img src={waffleImg} alt="Waffle with Berries" />
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
                <p className="text-rose400">Waffle</p>
                <h3 className="text-rose900 font-redHat600">
                  Waffle with Berries
                </h3>
                <p className="text-red font-redHat600">$6.50</p>
              </div>
            </li>
          )}
        </ul>
      </section>
    </main>
  );
};

export default Desserts;
