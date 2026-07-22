import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowOnHover?: boolean;
  glass?: boolean;
  glowColor?: "blue" | "indigo" | "neutral";
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  glowOnHover = false,
  glass = true,
  glowColor = "blue",
  className = "",
  ...props
}) => {
  const baseClasses = "rounded-2xl border transition-all duration-300 relative overflow-hidden";
  
  const cardBgClasses = glass
    ? "bg-white/90 backdrop-blur-md border-slate-100/80 shadow-soft-sm"
    : "bg-white border-slate-100 shadow-soft-sm";

  const hoverClasses = hoverEffect
    ? "hover:translate-y-[-4px] hover:shadow-soft-md"
    : "";

  const glowColorClasses = {
    blue: "hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(37,99,235,0.06)]",
    indigo: "hover:border-indigo-200 hover:shadow-[0_12px_40px_rgba(79,70,229,0.06)]",
    neutral: "hover:border-slate-300 hover:shadow-soft-md"
  };

  const glowClasses = glowOnHover ? glowColorClasses[glowColor] : "";

  return (
    <div
      className={`${baseClasses} ${cardBgClasses} ${hoverClasses} ${glowClasses} ${className}`}
      {...props}
    >
      {/* Soft top gradient line on hover */}
      {glowOnHover && (
        <div 
          className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${
            glowColor === "blue" 
              ? "from-blue-600 to-teal-500" 
              : glowColor === "indigo"
              ? "from-indigo-600 to-purple-500"
              : "from-slate-400 to-slate-200"
          } opacity-0 hover:opacity-100 transition-opacity duration-300`}
        />
      )}
      {children}
    </div>
  );
};

export default Card;
