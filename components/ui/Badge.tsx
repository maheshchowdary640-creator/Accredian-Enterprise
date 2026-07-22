import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "cyan" | "purple" | "blue" | "zinc" | "outline";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cyan",
  size = "sm",
  className = "",
  ...props
}) => {
  const baseClasses = "inline-flex items-center font-semibold rounded-full tracking-wide uppercase select-none";

  const variants = {
    cyan: "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20",
    purple: "bg-accent-purple/10 text-accent-purple border border-accent-purple/20",
    blue: "bg-accent-blue/10 text-accent-blue border border-accent-blue/20",
    zinc: "bg-slate-800 text-slate-300 border border-slate-700",
    outline: "border border-slate-700 text-slate-400"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[9px] gap-1",
    md: "px-2.5 py-1 text-[10px] gap-1"
  };

  return (
    <span
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
