import React from "react";

interface buttonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: React.ReactNode;
}

const Button = ({ text = "Click Me", onClick, icon }: buttonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-lg rounded-full shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
