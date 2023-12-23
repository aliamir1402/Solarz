import React from "react";
import { Select } from "@chakra-ui/react";

export default function dropdown(props) {
  const customNames = props.customNames;
  return (
    <>
      <div className="Drop-Down">
        <Select placeholder="Select Panel Module">
          {customNames.map((customName, index) => (
            <option className="Option-Down" key={index} value={index + 1}>
              {customName}
            </option>
          ))}
        </Select>
      </div>
    </>
  );
}
