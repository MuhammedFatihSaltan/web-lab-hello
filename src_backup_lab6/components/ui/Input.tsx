import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-3 bg-white dark:bg-gray-800 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 hover:border-gray-300 dark:hover:border-gray-700 ${
          error
            ? "border-red-500 focus:border-red-500 ring-red-500/20"
            : "border-gray-100 dark:border-gray-800 focus:border-primary"
        } dark:text-white dark:placeholder-gray-600 font-medium`}
        {...props}
      />
      {error && (
        <span className="text-xs font-semibold text-red-500 px-1 animate-in fade-in slide-in-from-top-1">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
