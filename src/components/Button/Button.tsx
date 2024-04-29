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
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const signs = ['+', '-', 'x', '÷', '%'];

    if (numbers.some(number => {
      return number === children
    }))
      updateResult(children);

    if (signs.some(sign => {
      return sign === children
    }))
      return console.log(children);

    if (children === '=')
      return console.log(children);

    if (children === 'ac')
      console.log('clean');
    updateResult(children);

    if (children === '+/-')
      return console.log(children);

    else return;
  };

  return (
    <button className={buttonClasses} onClick={handleClick}>
      <p className="button__children">{children}</p>
    </button>
  )
};

export default Button;
