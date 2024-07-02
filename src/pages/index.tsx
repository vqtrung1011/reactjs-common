import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Datepicker from "src/components/ui/datepicker";
import Dropdown from "src/components/ui/dropdown";

import Input from "src/components/ui/input";
import Select from "src/components/ui/select";

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(event.target.value);
  };

  const handleDropdownSelect = (item: string) => {
    setSelectedItem(item);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the home page of the application"
        />
      </Helmet>

      <h1>Home Page</h1>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <Select
        options={[
          { value: "1", label: "Option 1" },
          { value: "2", label: "Option 2" },
        ]}
        value={selectValue}
        onChange={handleSelectChange}
      />
      <Dropdown
        items={["Item 1", "Item 2", "Item 3"]}
        onSelect={handleDropdownSelect}
      />
      <Datepicker selected={selectedDate} onChange={handleDateChange} />
    </div>
  );
};

export default Home;
