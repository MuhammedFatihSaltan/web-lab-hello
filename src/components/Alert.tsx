import React, { useState } from "react";

export default function Alert({
  children,
  variant = "info",
  title,
  dismissible = false,
  onDismiss,
  className = "",
}: {
  children: React.ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const variants = {
    info: `bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-950 dark:text-blue-200`,
    success: `bg-green-50 border-green-500 text-green-800 dark:bg-green-950 dark:text-green-200`,
    warning: `bg-amber-50 border-amber-500 text-amber-800 dark:bg-amber-950 dark:text-amber-200`,
    error: `bg-red-50 border-red-500 text-red-800 dark:bg-red-950 dark:text-red-200`,
  };

  const handleDismiss = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  return (
    <div
      role="alert"
      className={`border-l-4 rounded-r-lg p-4 transition-all ${variants[variant]} ${className}`.trim()}
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col flex-1">
          {title && <p className="font-semibold mb-1">{title}</p>}
          <p className="text-sm">{children}</p>
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="ml-4 opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-current rounded p-1 -mr-2 -mt-2 aspect-square flex items-center justify-center font-bold text-lg leading-none"
            aria-label="Kapat"
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
}
