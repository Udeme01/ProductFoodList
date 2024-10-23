import { useContext } from "react";

import removeItemIcon from "/assets/images/icon-remove-item.svg";
import PropTypes from "prop-types";
import { DessertCartContext } from "./store/dessert-cart-context";

const CartList = ({ name, price, quantity }) => {
  const { dessertItems, removeItemFromCart } = useContext(DessertCartContext);
  console.log(dessertItems);

  return (
    <li className="flex items-center justify-between border-b border-b-rose100 pb-4 mb-5">
      <div>
        <h1 className="text-rose500 font-redHat700 text-sm leading-6">
          {name}
        </h1>

        <span className="flex gap-4">
          <h4 className="text-red font-redHat600">{quantity}x</h4>
          <p className="flex gap-2">
            <span className="text-rose300">{`@${price.toFixed(2)}`}</span>
            <span className="text-rose500 font-redHat700">{`$${(
              price * quantity
            ).toFixed(2)}`}</span>
          </p>
        </span>
      </div>

      <button onClick={() => removeItemFromCart(name)}>
        <img
          src={removeItemIcon}
          alt="remove item icon"
          className="border-2 p-1 rounded-full border-rose400"
        />
      </button>
    </li>
  );
};

CartList.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default CartList;
