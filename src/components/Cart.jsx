import { useRef, useContext } from "react";
import PropTypes from "prop-types";
import carbonNeutralIcon from "/assets/images/icon-carbon-neutral.svg";
import OrderConfirmModal from "./OrderConfirmModal";
import { Button } from "./Button";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import { DessertCartContext } from "./store/dessert-cart-context";

const Cart = ({ title }) => {
  const { dessertItems } = useContext(DessertCartContext);
  console.log(dessertItems);

  const totalPrice = dessertItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  const modal = useRef();

  const handleOpenOrders = () => {
    modal.current.open();
  };

  let modalActions = <Button>Start New Order</Button>;

  return (
    <section className="bg-white rounded-md p-6 mt-10 flex flex-col gap-8 h-fit w-full lg:w-full lg:mt-0 xl:max-w-md">
      <OrderConfirmModal ref={modal} actions={modalActions} />
      <h1 className="text-red font-redHat700 text-xl">{title}</h1>

      {dessertItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <ul>
            {dessertItems.map((dessertItem) => {
              // console.log(dessertItem.image);
              return (
                <CartList
                  key={`${dessertItem.name}-${dessertItem.category}`}
                  name={dessertItem.name}
                  price={dessertItem.price}
                  quantity={dessertItem.quantity}
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

          {/* carbon neutral */}
          <div className="flex items-center justify-center gap-2 bg-rose50 p-4 rounded-md">
            <img src={carbonNeutralIcon} alt="carbon neutral icon" />
            <p className="text-sm">
              This is a <span className="font-redHat700">carbon-neutral </span>
              delivery
            </p>
          </div>

          <Button onClick={handleOpenOrders}>Confirm Order</Button>
        </>
      )}
    </section>
  );
};

Cart.propTypes = {
  title: PropTypes.string,
};

export default Cart;

{
  /* <OrderConfirmModal
  ref={modal}
  title="Order Confirmed"
  actions={modalActions}
/>; */
}
