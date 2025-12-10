// components/ui/Button.tsx
import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
	disabled?: boolean;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	disabled = false,
	className = "",
}) => {
	const baseClasses =
		"flex items-center px-10 h-[40px] text-[14px] justify-center font-[500]  font-[600]";

	return (
		<button
			onClick={onClick}
			disabled={disabled}
			style={{ fontFamily: "Inter, sans-serif" }}
			className={`${baseClasses} ${className}`}>
			{children}
		</button>
	);
};

export default Button;
