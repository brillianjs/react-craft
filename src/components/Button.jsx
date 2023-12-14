const type = {
  primary:
    "bg-teal-500 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-50",
  secondary:
    "bg-gray-500 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50",
};

const Button = ({ children, variants = "primary", onClick }) => {
  return (
    <button
      className={`${type[variants]} py-2 px-5 rounded-lg transition-all font-semibold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
