import waffleImg from "../assets/images/image-waffle-mobile.jpg";
import cartIconAdd from "../assets/images/icon-add-to-cart.svg";

const Desserts = () => {
  return (
    <main className="font-redHat text-rose900 m-6">
      <h1 className="font-redHat700 text-4xl my-8">Desserts</h1>

      <section>
        <div className="relative flex flex-col items-center">
          <img src={waffleImg} />
          <button className="absolute -bottom-5 font-redHat600 text-rose900 text-sm bg-rose50 flex items-center justify-center px-6 py-[10px] border rounded-full">
            <img src={cartIconAdd} className="mr-2" />
            Add to Cart
          </button>
        </div>
        <div className="leading-7 mt-6">
          <p className="text-rose400">Waffle</p>
          <h3 className="text-rose900 font-redHat600">Wafle with Berries</h3>
          <p className="text-red font-redHat600">$6.50</p>
        </div>
      </section>
    </main>
  );
};

export default Desserts;
