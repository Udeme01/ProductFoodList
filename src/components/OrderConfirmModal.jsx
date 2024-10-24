import { forwardRef, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";

import { createPortal } from "react-dom";
import OrderConfirm from "./OrderConfirm";

const OrderConfirmModal = forwardRef(function OrderConfirmModal(
  { actions },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="rounded-xl py-8 px-6 bg-white w-full">
      <OrderConfirm modalOpen={open} title="Order Confirmed" />
      <form method="dialog">{actions}</form>
    </dialog>,
    document.getElementById("modal")
  );
});

OrderConfirmModal.propTypes = {
  actions: PropTypes.object,
  title: PropTypes.string,
};

export default OrderConfirmModal;
