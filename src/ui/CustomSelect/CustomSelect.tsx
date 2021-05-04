import React, { forwardRef } from "react";
import Select from "react-select";
import styled from "styled-components";
import chroma from "chroma-js";
import { useQuery } from "../../hooks/hooks";
import { useHistory } from "react-router";
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
      border: isFocused ? "none" : "none",

      ":active": {
        ...styles[":active"],

        color: "#fff",
        backgroundColor: !isDisabled && (isSelected ? data.color : "#C60E2E"),
      },
      ":hover": {
        ...styles[":hover"],

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

export const CustomSelect: React.FC<any> = forwardRef((props, ref) => {
  return (
    <SelectWrapper>
      <Select {...props} ref={ref} styles={colourStyles} />
    </SelectWrapper>
  );
});

export const SizeSelect: React.FC<any> = forwardRef((props, ref) => {
  const query: any = useQuery();
  const history = useHistory();
  function onPushSearchText(value: any) {
    let size = value;
    query.delete("size");

    if (!query.has("size") && size) {
      query.append("size", size);
      history.push(`?${query.toString()}`);
    } else if (query.has("size") && size) {
      query.set("size", size);
      history.push(`?${query.toString()}`);
    } else {
      query.delete("size");
      history.push(`?${query.toString()}`);
    }
  }
  return (
    <SizeSelectWrapper>
      <Select
        onChange={(value) => onPushSearchText(value?.value)}
        {...props}
        ref={ref}
        styles={colourStyles}
      />
    </SizeSelectWrapper>
  );
});

const SelectWrapper = styled.div`
  max-width: 366px;
  max-height: 40px;
`;
const SizeSelectWrapper = styled.div`
  width: 88px;
  max-height: 40px;
`;
