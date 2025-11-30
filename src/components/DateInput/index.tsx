import React from "react";

type CalendarInputProps = {
  label: string;
  value?: string;
  onChange: (date: string) => void;
  name?: string;
};

const CalendarInput: React.FC<CalendarInputProps> = ({
  label,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="date"
        name={name}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-main-primary focus:border-main-primary text-sm"
      />
    </div>
  );
};

export default CalendarInput;
