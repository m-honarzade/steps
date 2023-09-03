const Button = ({ bgColor, textColor, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`bg-${bgColor} text-${textColor} text-sm px-4 py-1 rounded-full`}
    >
      {children}
    </button>
  );
};

export default Button;
