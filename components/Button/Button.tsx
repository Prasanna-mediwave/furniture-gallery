import React from "react";

interface ButtonProps {
  onClick?: any;
  btnText: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, btnText }) => {
  return (
    <>
      <button type="button" className="btn" onClick={onClick}>
        {btnText}
      </button>
    </>
  );
};
