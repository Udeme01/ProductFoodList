import PropTypes from "prop-types";

import addToCart from "/assets/images/icon-add-to-cart.svg";
import decrementQuantityIcon from "/assets/images/icon-decrement-quantity.svg";
import incrementQuantityIcon from "/assets/images/icon-increment-quantity.svg";

import { useContext } from "react";
import { DessertCartContext } from "./store/dessert-cart-context";

const ProductItem = ({ dessert }) => {
  const { addItemToCart, dessertItems } = useContext(DessertCartContext);

  const {
    name,
    category,
    price,
    image: { mobile },
  } = dessert;

  const isInCart = dessertItems.some(
    (productItem) => productItem.name === name
  );

  return (
    <li key={name}>
      {dessertItems.length !== 0 && isInCart ? (
        <div className="relative flex flex-col">
          <img src={mobile} alt="Waffle with Berries" className="rounded-md" />
          <div className="absolute -bottom-5 font-redHat600 text-sm bg-red left-0 right-0 w-[10rem] mx-auto px-6 py-[10px] rounded-full flex justify-between items-center cursor-pointer lg:px-4 lg:py-[8px]">
            <button>
              <img
                src={decrementQuantityIcon}
                alt="decrement quantity icon"
                className="border border-white p-1 rounded-full w-[1.2rem] h-[1.2rem] flex items-center justify-center"
              />
            </button>

            <span className="text-rose50">4</span>

            <button>
              <img
                src={incrementQuantityIcon}
                alt="increment quantity icon"
                className="border border-white p-1 rounded-full"
              />
            </button>
          </div>
        </div>
      ) : (
        <button
          className="relative flex flex-col mt-6"
          onClick={() => addItemToCart(name)}
        >
          <img src={mobile} alt="Waffle with Berries" className="rounded-md" />
          <div className="absolute -bottom-5 font-redHat600 text-sm text-rose900 bg-rose50 left-0 right-0 w-[10rem] mx-auto px-6 py-[10px] rounded-full justify-between flex border border-rose300 hover:border-red hover:text-red lg:px-4 lg:py-[8px]">
            <img src={addToCart} alt="icon-add-to-cart" className="mr-2" />
            Add to Cart
          </div>
        </button>
      )}

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
