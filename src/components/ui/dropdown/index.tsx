import React, { useState } from "react";
import "./index.scss";

interface DropdownProps {
  items: string[];
  onSelect: (item: string) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ items, onSelect, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${className}`}>
      <button onClick={handleToggle} className="dropdown-toggle">
        Select an item
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
