import React, { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    background: 'normal' | 'orange' | 'grey',
    column: 'normal' | 'double',
}

const Button: React.FC<ButtonProps> = ({
    children,
    background,
    column,
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

    return (
        <button className={buttonClasses}>
            <p className="button__children">{children}</p>
        </button>
    )
};

export default Button;
