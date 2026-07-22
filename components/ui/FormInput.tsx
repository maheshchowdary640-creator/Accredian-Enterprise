import React from "react";

interface Option {
  value: string;
  label: string;
}

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  rows?: number;
  options?: Option[];
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  error,
  value,
  onChange,
  required = false,
  rows = 4,
  options
}) => {
  const isTextArea = type === "textarea";
  const isSelect = type === "select" && options && options.length > 0;
  const errorId = `${id}-error`;
  
  const baseClasses = `w-full bg-white border ${
    error 
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" 
      : "border-slate-200 focus:border-blue-600 focus:ring-blue-600/20"
  } rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-all`;

  return (
    <div className="flex flex-col w-full text-left">
      {/* Label */}
      <label htmlFor={id} className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide select-none">
        {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
      </label>

      {/* Select element, Textarea or Input */}
      {isSelect ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseClasses} text-slate-500 focus:text-slate-800 cursor-pointer`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : isTextArea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`${baseClasses} resize-none`}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={baseClasses}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
        />
      )}

      {/* Error message */}
      {error && (
        <p 
          id={errorId}
          className="text-xs text-red-500 mt-1.5 font-semibold animate-[fadeIn_0.2s_ease-out]"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
