import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan" | "purple";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  href,
  ...props
}) => {
  // Base classes with high-performance CSS scaling transitions and standard visible focus rings
  const baseClasses = "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none active:scale-[0.98]";

  // Variant setups for clean light-mode enterprise styles
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-950",
    secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200 focus-visible:ring-slate-400",
    outline: "border border-slate-200 text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-300",
    ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-50 focus-visible:ring-slate-300",
    cyan: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-500/10 focus-visible:ring-blue-600",
    purple: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-500/10 focus-visible:ring-indigo-600"
  };

  // Size specifications matching rounded buttons
  const sizes = {
    sm: "px-4 py-1.5 text-xs gap-1.5 rounded-full",
    md: "px-6 py-2.5 text-sm gap-2 rounded-full",
    lg: "px-8 py-3.5 text-base gap-2.5 rounded-full"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const renderContent = () => (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </>
  );

  // Render anchor if href is provided (A11y/HTML standard compliance)
  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        {...(props as any)}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
