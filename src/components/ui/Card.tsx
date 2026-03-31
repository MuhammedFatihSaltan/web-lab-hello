import React from "react";

interface CardProps {
  variant?: "elevated" | "outline" | "flat";
  title?: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  variant = "outline",
  title,
  image,
  imageAlt = "",
  children,
  className = "",
}) => {
  const styles = {
    elevated: "shadow-xl border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900",
    outline: "border-2 border-gray-200 dark:border-gray-800 bg-surface dark:bg-gray-950",
    flat: "bg-gray-50 dark:bg-gray-800 border-transparent",
  };

  return (
    <div
      className={`rounded-3xl overflow-hidden border transition-all duration-300 relative ${styles[variant]} ${className}`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden group">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}
      <div className="p-6 h-full flex flex-col">
        {title && (
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-1">
            {title}
          </h3>
        )}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Card;
