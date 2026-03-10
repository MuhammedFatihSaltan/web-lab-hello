import React, { useId } from "react";

export default function Input({
  label,
  type = "text",
  error,
  helpText,
  id: providedId,
  className = "",
  ...props
}: {
  label?: string;
  type?: string;
  error?: string;
  helpText?: string;
  id?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const generatedId = useId();
  const id = providedId || generatedId;

  return (
    <div className="space-y-1 w-full relative">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        className={`w-full px-3 py-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-gray-100 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500 dark:border-gray-600 dark:focus:ring-blue-500"
        } ${
          props.disabled
            ? "bg-gray-100 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400 opacity-70"
            : "bg-white dark:bg-gray-800"
        } ${className}`}
        aria-describedby={
          error ? `${id}-error` : helpText ? `${id}-help` : undefined
        }
        aria-invalid={!!error}
        {...props}
      />

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-sm text-red-600 dark:text-red-400 absolute mt-1"
        >
          {error}
        </p>
      )}

      {helpText && !error && (
        <p
          id={`${id}-help`}
          className="text-sm text-gray-500 dark:text-gray-400 absolute mt-1"
        >
          {helpText}
        </p>
      )}
    </div>
  );
}
