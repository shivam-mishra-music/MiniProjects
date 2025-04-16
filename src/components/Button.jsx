import React from "react";

export default function Button({ children, href, variant = "default" }) {
  const baseStyle =
    "text-sm font-medium px-4 py-2 rounded-lg text-white text-center transition-all duration-300 w-full";

  const variants = {
    default: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
    secondary:
      "bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-teal-600 hover:to-indigo-600",
    outline: "border border-gray-400 text-gray-200 hover:bg-gray-700",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
