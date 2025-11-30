import React, { SelectHTMLAttributes, FC, forwardRef } from "react";
import classNames from "classnames";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options?: Array<string | { label: string; value: string | number }>;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, options = [], className, children, ...props }, ref) => {
    const selectClasses = classNames(
      "w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors bg-white",
      {
        "border-danger-500 focus:ring-danger-500": error,
        "border-gray-300": !error,
      },
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <select ref={ref} className={selectClasses} {...props}>
          {children ||
            options.map((option, index) => {
              if (typeof option === "string") {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              } else {
                return (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                );
              }
            })}
        </select>
        {error && (
          <p className="mt-1 text-sm text-danger-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
