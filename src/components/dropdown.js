import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

export default function Dropdown(props) {
  var [selectedValue, setSelectedValue] = useState([]);

  const handleSelectChange = (event) => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    const value = event.target.value;
    setSelectedValue(value);
    setTimeout(() => {
      // After the asynchronous operation, send data to the parent
      props.sendDataToParent(value);
    }, 1000); // Simulating a 1-second delay
  };

  const customNames = props.customNames;

  return (
    <div className="Drop-Down">
      <Select
        placeholder="Select Panel Module"
        onChange={handleSelectChange}
        value={selectedValue}
      >
        {customNames.map((customName, index) => (
          <option className="Option-Down" key={index} value={index + 1}>
            {customName}
          </option>
        ))}
      </Select>
    </div>
  );
}
