import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.scss";

interface DatepickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  className?: string;
}

const Datepicker: React.FC<DatepickerProps> = ({
  selected,
  onChange,
  className,
}) => {
  return (
    <ReactDatePicker
      selected={selected}
      onChange={onChange}
      className={`datepicker ${className}`}
    />
  );
};

export default Datepicker;
