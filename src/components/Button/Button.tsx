import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
}

const Button: React.FC<ButtonProps> = ({
    children,
}) => {
    return (
        <button className="button">
            <p className="button__children">{children}</p>
        </button>
    )
};

export default Button;
