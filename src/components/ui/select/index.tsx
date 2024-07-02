import React from "react";
import "./index.scss";

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  className,
}) => {
  return (
    <select value={value} onChange={onChange} className={`select ${className}`}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
