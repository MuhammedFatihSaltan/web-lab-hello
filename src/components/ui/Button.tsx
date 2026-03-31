import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const styles = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
    secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/20",
    outline: "border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-300",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs font-bold uppercase tracking-wider",
    md: "px-5 py-2.5 text-sm font-semibold",
    lg: "px-8 py-4 text-base font-bold",
  };

  return (
    <button
      className={`rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${styles[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
