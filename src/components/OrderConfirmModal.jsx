import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import OrderConfirm from "./OrderConfirm";
import { DessertCartContext } from "./store/dessert-cart-context";

const OrderConfirmModal = forwardRef(function OrderConfirmModal(
  { actions },
  ref
) {
  const { clearCart } = useContext(DessertCartContext);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      id="modal"
      ref={dialog}
      className={`w-full h-[30rem] py-8 px-6 mx-auto sm:w-[35rem]`}
    >
      <OrderConfirm modalOpen={open} title="Order Confirmed" />
      <form method="dialog" onClick={clearCart}>
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

OrderConfirmModal.propTypes = {
  actions: PropTypes.object,
  title: PropTypes.string,
};

export default OrderConfirmModal;
