import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string,
  background: 'normal' | 'orange' | 'grey',
  column: 'normal' | 'double',
  updateResult: (children: string) => string,
}

const Button: React.FC<ButtonProps> = ({
  children,
  background,
  column,
  updateResult,
}) => {

  const backgroundButtonClasses = {
    "normal": "button",
    "grey": "button button__grey",
    "orange": "button button__orange",
  };

  const columnButtonClasses = {
    "normal": "",
    "double": "button__double",
  };

  const buttonClasses = classNames(
    backgroundButtonClasses[background],
    columnButtonClasses[column],
  );

  function handleClick() {
    updateResult(children);
  };

  return (
    <button className={buttonClasses} onClick={handleClick}>
      <p className="button__children">{children}</p>
    </button>
  )
};

export default Button;
