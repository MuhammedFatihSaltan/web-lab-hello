import React from "react";

interface AlertProps {
  variant?: "info" | "error" | "success" | "warning";
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  variant = "info",
  title,
  children,
  className = "",
}) => {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-900/30 dark:text-blue-200",
    error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-900/30 dark:text-red-200",
    success: "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-900/30 dark:text-green-200",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-900/30 dark:text-yellow-200",
  };

  return (
    <div
      className={`p-4 border rounded-xl flex gap-3 ${styles[variant]} ${className}`}
      role="alert"
    >
      <div className="flex-1">
        {title && <h4 className="font-bold mb-1">{title}</h4>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    </div>
  );
};

export default Alert;
