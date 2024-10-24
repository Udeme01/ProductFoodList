import { useContext } from "react";

import removeItemIcon from "/assets/images/icon-remove-item.svg";
import PropTypes from "prop-types";
import { DessertCartContext } from "./store/dessert-cart-context";

const CartList = ({ name, price, quantity, modalOpen, thumbnail }) => {
  const { dessertItems, removeItemFromCart } = useContext(DessertCartContext);
  console.log(dessertItems);

  return (
    <li
      className={`flex items-center justify-between mb-5 ${
        modalOpen && "w-full mx-2 p-px pb-px"
      }`}
    >
      {modalOpen && (
        <img
          src={thumbnail}
          className={`${modalOpen && "rounded-lg w-12 mr-2"}`}
        />
      )}
      <div className="w-full flex flex-col">
        <h1 className="text-rose900 font-redHat700 text-sm leading-6">
          {name}
        </h1>

        <span className="flex gap-4 w-full relative">
          <h4 className="text-red font-redHat600">{quantity}x</h4>
          <p
            className={`flex gap-2 ${
              modalOpen && "w-full justify-between items-center"
            }`}
          >
            <span className="text-rose300">{`@${price.toFixed(2)}`}</span>
            <span
              className={`text-rose500 font-redHat700 ${
                modalOpen && "absolute right-0 bottom-[14px]"
              }`}
            >{`$${(price * quantity).toFixed(2)}`}</span>
          </p>
        </span>
      </div>
      {!modalOpen ? (
        <button onClick={() => removeItemFromCart(name)}>
          <img
            src={removeItemIcon}
            alt="remove item icon"
            className="border-2 p-1 rounded-full border-rose400"
          />
        </button>
      ) : undefined}
    </li>
  );
};

CartList.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  modalOpen: PropTypes.func,
  thumbnail: PropTypes.string,
};

export default CartList;
