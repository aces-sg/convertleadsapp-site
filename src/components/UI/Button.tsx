import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  primary?: boolean;
  secondary?: boolean;
  size?: "small" | "medium" | "large";
  color?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  label,
  primary = false,
  secondary = false,
  size = "medium",
  color,
  icon,
  children,
  className,
  disabled,
  ...props
}) => {
  const buttonClasses = classNames(
    "inline-flex items-center justify-center font-medium rounded transition-colors duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    {
      // Primary button (brand color)
      "bg-main-primary text-gray-900 hover:bg-brand-600 focus-visible:ring-brand-500": primary && !color,

      // Secondary button
      "bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500": secondary && !primary && !color,

      // Default button
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400": !primary && !secondary && !color,

      // Disabled state
      "opacity-50 cursor-not-allowed": disabled,

      // Size variants
      "px-3 py-1.5 text-sm": size === "small",
      "px-4 py-2 text-base": size === "medium",
      "px-6 py-3 text-lg": size === "large",
    },
    className
  );

  // Custom color overrides
  const customColorClasses = color ? `bg-${color} hover:opacity-90` : "";

  return (
    <button
      className={`${buttonClasses} ${customColorClasses}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label || children}
    </button>
  );
};

export default Button;
