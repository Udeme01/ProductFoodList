import PropTypes from "prop-types";
// import emptyCartImg from "../assets/images/illustration-empty-cart.svg";
import removeItemIcon from "../assets/images/icon-remove-item.svg";

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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-rose500 font-redHat700 text-sm leading-6">
              Classic Tiramisu
            </h1>
            <span className="flex gap-5">
              <h4 className="text-red font-redHat600">1x</h4>
              <p>
                <span className="text-rose300">
                  @$5.50
                  <span className="text-rose500">$5.50</span>
                </span>
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
    </section>
  );
};

Cart.propTypes = {
  title: PropTypes.string,
};

export default Cart;
