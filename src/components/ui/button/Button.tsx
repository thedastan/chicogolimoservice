// components/ui/Button.tsx
import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseClasses =
    "flex items-center px-10 h-[40px] text-[14px] justify-center font-[600]";

  return (
    <button
      {...props}
      disabled={disabled}
      style={{ fontFamily: "Inter, sans-serif" }}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
