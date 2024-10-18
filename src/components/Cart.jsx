import PropTypes from "prop-types";
// import emptyCartImg from "../assets/images/illustration-empty-cart.svg";
import removeItemIcon from "/assets/images/icon-remove-item.svg";
import carbonNeutralIcon from "/assets/images/icon-carbon-neutral.svg";

const Cart = ({ title }) => {
  return (
    <section className="bg-white rounded-md p-6 flex flex-col gap-8 mt-10">
      <h1 className="text-red font-redHat700 text-xl">{title}</h1>
      {/* <section className="gap-4 flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <img src={emptyCartImg} />
        </div>
        <p className="text-sm text-rose500 text-center font-redHat700">
          Your added items will appear here
        </p>
      </section> */}
      <section>
        {/* item 1 */}
        <div className="flex items-center justify-between border-b border-b-rose100 pb-4 mb-5">
          <div>
            <h1 className="text-rose500 font-redHat700 text-sm leading-6">
              Classic Tiramisu
            </h1>

            <span className="flex gap-4">
              <h4 className="text-red font-redHat600">1x</h4>
              <p className="flex gap-2">
                <span className="text-rose300">@$5.50</span>
                <span className="text-rose500 font-redHat700">$5.50</span>
              </p>
            </span>
          </div>

          <div>
            <img
              src={removeItemIcon}
              alt="remove item icon"
              className="border-2 p-1 rounded-full border-rose400"
            />
          </div>
        </div>

        {/* item 2 */}
        <div className="flex items-center justify-between border-b border-b-rose100 pb-4 mb-5">
          <div>
            <h1 className="text-rose500 font-redHat700 text-sm leading-6">
              Vanilla Bean Crème Brûlée
            </h1>

            <span className="flex gap-4">
              <h4 className="text-red font-redHat600">4x</h4>
              <p className="flex gap-2">
                <span className="text-rose300">@$7.50</span>
                <span className="text-rose500 font-redHat700">$28.00</span>
              </p>
            </span>
          </div>

          <div>
            <img
              src={removeItemIcon}
              className="border-2 p-1 rounded-full border-rose400"
            />
          </div>
        </div>

        {/* item 3 */}
        <div className="flex items-center justify-between border-b border-b-rose100 pb-4">
          <div>
            <h1 className="text-rose500 font-redHat700 text-sm leading-6">
              Vanilla Panna Cotta
            </h1>

            <span className="flex gap-4">
              <h4 className="text-red font-redHat600">2x</h4>
              <p className="flex gap-2">
                <span className="text-rose300">@$6.50</span>
                <span className="text-rose500 font-redHat700">$13.00</span>
              </p>
            </span>
          </div>

          <div>
            <img
              src={removeItemIcon}
              className="border-2 p-1 rounded-full border-rose400"
            />
          </div>
        </div>
      </section>
      {/* order total && price */}
      <section className="flex items-center justify-between">
        <h5 className="text-md font-redHat600 text-rose500">Order Total</h5>
        <p className="font-redHat700 text-rose900 text-2xl">$46.50</p>
      </section>

      {/* carbon neutral */}
      <div className="flex items-center justify-center gap-2 bg-rose50 p-4 rounded-md">
        <img src={carbonNeutralIcon} alt="carbon neutral icon" />
        <p className="text-sm">
          This is a <span className="font-redHat700">carbon-neutral </span>
          delivery
        </p>
      </div>

      <button className="text-rose50 bg-red rounded-full py-4 font-redHat600 text-lg">
        Confirm Order
      </button>
    </section>
  );
};

Cart.propTypes = {
  title: PropTypes.string,
};

export default Cart;
