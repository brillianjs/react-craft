import PropTypes from "prop-types";

const type = {
  primary:
    "bg-teal-500 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50",
  secondary:
    "bg-gray-500 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50",
};

const size = {
  small: "py-1 px-3 text-sm",
  medium: "py-2 px-5 text-base",
  large: "py-3 px-6 text-lg",
};

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled,
  icon,
}) => {
  return (
    <button
      className={`flex items-center ${type[variant]} ${
        size[size]
      } rounded-lg transition-all font-semibold ${
        icon ? "px-3 py-2 space-x-2" : "px-3 py-2"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.node, // Ikon dari Font Awesome
};

export default Button;
