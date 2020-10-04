import React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button type="submit" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
