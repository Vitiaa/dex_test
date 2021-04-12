import React from "react";
import chroma from "chroma-js";

import Select from "react-select";
import styled from "styled-components";

const MultiSelect: React.FC = (...props) => {
  const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#9C9C9C", isFixed: true },
    { value: "blue", label: "Blue", color: "#9C9C9C", isDisabled: true },
    { value: "purple", label: "Purple", color: "#9C9C9C" },
    { value: "red", label: "Red", color: "#9C9C9C", isFixed: true },
    { value: "orange", label: "Orange", color: "#9C9C9C" },
    { value: "yellow", label: "Yellow", color: "#9C9C9C" },
    { value: "green", label: "Green", color: "#9C9C9C" },
    { value: "forest", label: "Forest", color: "#9C9C9C" },
    { value: "slate", label: "Slate", color: "#9C9C9C" },
    { value: "silver", label: "Silver", color: "#9C9C9C" },
  ];
  const colourStyles = {
    control: (styles: any) => ({ ...styles, backgroundColor: "white" }),
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : null,
        color: isDisabled
          ? "#C60E2E"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],

          color: "#fff",
          backgroundColor: !isDisabled && (isSelected ? data.color : "#C60E2E"),
        },
      };
    },
    multiValue: (styles: any, { data }: any) => {
      const color = chroma("#fff");
      return {
        ...styles,
        backgroundColor: "#E4163A",
      };
    },
    multiValueLabel: (styles: any, { data }: any) => ({
      ...styles,
      color: "#fff",
    }),
    multiValueRemove: (styles: any, { data }: any) => ({
      ...styles,
      color: "#fff",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "#E4163A",
        color: "white",
      },
    }),
  };
  return (
    <MultiSelectWrapper>
      <Select
        style={"max-width: 366px;"}
        closeMenuOnSelect={false}
        defaultValue={[colourOptions[0], colourOptions[1]]}
        isMulti
        options={colourOptions}
        styles={colourStyles}
      />
    </MultiSelectWrapper>
  );
};

export default MultiSelect;
const MultiSelectWrapper = styled.div`
  max-width: 366px; ;
`;
