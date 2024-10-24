import PropTypes from "prop-types";

import addToCart from "/assets/images/icon-add-to-cart.svg";
import decrementQuantityIcon from "/assets/images/icon-decrement-quantity.svg";
import incrementQuantityIcon from "/assets/images/icon-increment-quantity.svg";

import { useContext } from "react";
import { DessertCartContext } from "./store/dessert-cart-context";

const ProductItem = ({ dessert }) => {
  const { addItemToCart, updateCartItemQuantity, dessertItems } =
    useContext(DessertCartContext);

  const {
    name,
    category,
    price,
    image: { desktop, mobile, tablet },
  } = dessert;

  const isInCart = dessertItems.some(
    (productItem) => productItem.name === name
  );

  // const isDesktop = useMediaQuery(
  //   "(min-width: 1300px) and (max-width: 2400px)"
  // );
  // const isTablet = useMediaQuery("(min-width: 600px) and (max-width: 1299px)");

  return (
    <li key={name}>
      <article className="relative flex flex-col mt-6 rounded-xl">
        <div className="border rounded-xl">
          <img
            src={mobile}
            alt="Waffle with Berries"
            className={`rounded-xl ${
              dessertItems.length !== 0 && isInCart && "border-2 border-red"
            }`}
          />
        </div>

        {dessertItems.length !== 0 && isInCart ? (
          <div className="absolute -bottom-5 font-redHat600 text-sm bg-red left-0 right-0 w-[10rem] mx-auto px-6 py-[12px] rounded-full flex justify-between items-center cursor-pointer">
            <button onClick={() => updateCartItemQuantity(name, -1)}>
              <img
                src={decrementQuantityIcon}
                alt="decrement quantity icon"
                className="border border-white p-1 rounded-full w-[1.2rem] h-[1.2rem] flex items-center justify-center"
              />
            </button>

            <span className="text-rose50">
              {
                dessertItems.find((cartItems) => cartItems.name === name)
                  ?.quantity
              }
            </span>

            <button onClick={() => updateCartItemQuantity(name, 1)}>
              <img
                src={incrementQuantityIcon}
                alt="increment quantity icon"
                className="border border-white p-1 rounded-full"
              />
            </button>
          </div>
        ) : (
          <button
            className="absolute -bottom-5 font-redHat600 text-sm text-rose900 bg-rose50 left-0 right-0 w-[10rem] mx-auto px-6 py-[10px] rounded-full justify-between flex border border-rose300 hover:border-red hover:text-red"
            onClick={() => addItemToCart(name)}
          >
            <img src={addToCart} alt="icon-add-to-cart" />
            Add to Cart
          </button>
        )}
      </article>

      <div className="leading-7 mt-6">
        <p className="text-rose400">{category}</p>
        <h3 className="text-rose900 font-redHat600">{name}</h3>
        <p className="text-red font-redHat600">${price.toFixed(2)}</p>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  dessert: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.shape({
      mobile: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductItem;
