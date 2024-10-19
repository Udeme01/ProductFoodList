import PropTypes from "prop-types";
import orderConfirmIcon from "/assets/images/icon-order-confirmed.svg";

import tiramisu from "/assets/images/image-tiramisu-thumbnail.jpg";

const OrderConfirm = ({ title }) => {
  return (
    <div>
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
      <section className="bg-rose50 my-6 p-6">
        {/* item 1 */}
        <div className="flex items-center justify-between border-b border-b-rose100 pb-4 mb-5">
          <div className="flex items-center justify-center gap-3">
            <img src={tiramisu} className="rounded-lg w-12" />
            <div>
              <h1 className="text-rose500 font-redHat700 text-sm leading-6">
                Classic Tiramisu
              </h1>

              <span className="flex gap-4">
                <h4 className="text-red font-redHat600">1x</h4>
                <p className="flex gap-2">
                  <span className="text-rose300">@$5.50</span>
                </p>
              </span>
            </div>
          </div>

          <div>
            <span className="text-rose500 font-redHat700">$5.50</span>
          </div>
        </div>

        {/* order total && price */}
        <section className="flex items-center justify-between">
          <h5 className="text-md font-redHat600 text-rose500">Order Total</h5>
          <p className="font-redHat700 text-rose900 text-2xl">$46.50</p>
        </section>
      </section>
    </div>
  );
};

OrderConfirm.propTypes = {
  title: PropTypes.string,
};

export default OrderConfirm;
