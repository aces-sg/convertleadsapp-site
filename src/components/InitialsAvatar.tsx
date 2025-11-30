import React from "react";

interface InitialsAvatarProps {
  name: string;
  size?: "small" | "large";
  className?: string;
}

const getInitials = (name: string): string => {
  const words = name.trim().split(/\s+/);

  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].charAt(0).toUpperCase();

  // Get first letter of first word and first letter of last word
  const firstInitial = words[0].charAt(0).toUpperCase();
  const lastInitial = words[words.length - 1].charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
};

export default function InitialsAvatar({
  name,
  size = "small",
  className = "",
}: InitialsAvatarProps) {
  const initials = getInitials(name);

  // Size configurations
  const sizeClasses = {
    small: {
      container: "w-full h-full",
      text: "text-6xl",
    },
    large: {
      container: "w-full h-full",
      text: "text-9xl",
    },
  };

  const { container, text } = sizeClasses[size];

  return (
    <div
      className={`${container} flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200 ${className}`}
      role="img"
      aria-label={`${name}'s avatar`}
    >
      <span
        className={`${text} font-bold text-gray-700 select-none`}
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {initials}
      </span>
    </div>
  );
}
