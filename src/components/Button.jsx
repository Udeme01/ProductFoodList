import PropTypes from "prop-types";

export const Button = ({ children, ...props }) => {
  return (
    <button
      className="text-rose50 bg-red hover:bg-redHover rounded-full py-3 font-redHat600 text-lg w-full"
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};
