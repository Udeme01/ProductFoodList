import PropTypes from "prop-types";
import emptyCartImg from "/assets/images/illustration-empty-cart.svg";
// import removeItemIcon from "/assets/images/icon-remove-item.svg";
// import carbonNeutralIcon from "/assets/images/icon-carbon-neutral.svg";

const Cart = ({ title }) => {
  return (
    <section className="bg-white rounded-md p-6 flex flex-col gap-8 mt-10 h-fit lg:w-full">
      <h1 className="text-red font-redHat700 text-xl">{title}</h1>
      <section className="gap-4 flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <img src={emptyCartImg} />
        </div>
        <p className="text-sm text-rose500 text-center font-redHat700">
          Your added items will appear here
        </p>
      </section>
    </section>
  );
};

Cart.propTypes = {
  title: PropTypes.string,
};

export default Cart;
