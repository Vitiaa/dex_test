import React, { forwardRef, useEffect } from "react";
import chroma from "chroma-js";

import Select from "react-select";
import styled from "styled-components";
import { useTeamSelector } from "../../../store/team";
import CatalogItem from "../../CatalogItem/CatalogItem";
import { useAppDispatch } from "../../../store";
import { getTeams2 } from "../../../store/team/asyncAction";
import { getPlayers2 } from "../../../store/player/asyncAction";

const MultiSelect: React.FC<any> = forwardRef((props, ref) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTeams2({ pageNum: null, size: null, name: null }));
  }, []);
  const teamsList = useTeamSelector((state) => state.teams?.items);
  const Options = teamsList.map((item: any) => {
    return { value: item.id, label: item.name, color: "#9C9C9C" };
  });

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
        ref={ref}
        {...props}
        style={"max-width: 366px;"}
        closeMenuOnSelect={false}
        isMulti
        onChange={
          () => {}
          // console.log()
        }
        options={Options}
        styles={colourStyles}
      />
    </MultiSelectWrapper>
  );
});

export default MultiSelect;
const MultiSelectWrapper = styled.div`
  max-width: 366px; ;
`;
