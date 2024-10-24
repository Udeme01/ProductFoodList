import { useContext } from "react";

import PropTypes from "prop-types";
import orderConfirmIcon from "/assets/images/icon-order-confirmed.svg";

// import tiramisu from "/assets/images/image-tiramisu-thumbnail.jpg";

import { DessertCartContext } from "./store/dessert-cart-context";
import CartList from "./CartList";

const OrderConfirm = ({ title, modalOpen }) => {
  const { dessertItems } = useContext(DessertCartContext);
  console.log(dessertItems);

  const totalPrice = dessertItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <>
      <div className="leading-10">
        <img
          src={orderConfirmIcon}
          alt="confirmed order icon"
          className="mb-6"
        />
        <h1 className="text-rose900 font-redHat700 text-4xl">{title}</h1>
        <p className="text-rose400 font-redHat600">
          We hope you enjoy your food!
        </p>
      </div>
      <section className="bg-rose50 my-6 p-1 w-full">
        {/* item 1 */}
        <ul className="flex items-center justify-between border-b border-b-rose100 pb-4 mb-5 flex-col">
          {dessertItems.map((dessertItem) => {
            const { thumbnail } = dessertItem.image;
            console.log(thumbnail);
            return (
              <CartList
                key={`${dessertItem.name}-${dessertItem.category}`}
                name={dessertItem.name}
                price={dessertItem.price}
                quantity={dessertItem.quantity}
                modalOpen={modalOpen}
                thumbnail={thumbnail}
              />
            );
          })}
        </ul>

        {/* order total && price */}
        <section className="flex items-center justify-between">
          <h5 className="text-md font-redHat600 text-rose500">Order Total</h5>
          <p className="font-redHat700 text-rose900 text-2xl">
            {formattedTotalPrice}
          </p>
        </section>
      </section>
    </>
  );
};

OrderConfirm.propTypes = {
  title: PropTypes.string,
  modalOpen: PropTypes.func,
};

export default OrderConfirm;
