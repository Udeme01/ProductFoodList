import emptyCartImg from "/assets/images/illustration-empty-cart.svg";

const EmptyCart = () => {
  return (
    <section className="gap-4 flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <img src={emptyCartImg} />
      </div>
      <p className="text-sm text-rose500 text-center font-redHat700">
        Your added items will appear here
      </p>
    </section>
  );
};

export default EmptyCart;
