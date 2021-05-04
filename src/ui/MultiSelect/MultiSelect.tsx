import React, { forwardRef, useEffect } from "react";
import chroma from "chroma-js";
import Select from "react-select";
import styled from "styled-components";
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

const MultiSelect: React.FC<any> = forwardRef((props, ref) => {
  const query = useQuery();
  const history = useHistory();

  function onPushTeamsId(data: any) {

      if (!query.has("TeamIds")) {

        query.append("TeamIds", data[0].value);
        history.push(`?${query.toString()}`);
        console.log("1")
      } else if (query.has("TeamIds")) {
        query.delete("TeamIds")
        for (const {value} of data) {
          query.append("TeamIds", value);
        }
       console.log("2")
        history.push(`?${query.toString()}`);
      } else {
        console.log("3")
        query.delete("TeamIds");
        history.push(`?${query.toString()}`);
      }
  }

  return (
    <MultiSelectWrapper>
      <Wrapp>
      <Select
        ref={ref}
        {...props}
        style={"height: 44px;"}
        closeMenuOnSelect={false}
        isMulti
        onChange={onPushTeamsId}
        styles={colourStyles}
      />
      </Wrapp>
    </MultiSelectWrapper>
  );
});

export default MultiSelect;
const MultiSelectWrapper = styled.div`
display: flex;
  main-width: 327px;
  margin-bottom: 10px;

  
 
`;
const Wrapp = styled.div`
  min-width: 327px;
    width: 100%;
  height: 40px;
  margin-left: 50px;
    @media (max-width: 1100px) {
 
    margin-left: 10px;
  }
    @media (max-width: 1044px) {
  
    margin-left: 0px;
  }
`
