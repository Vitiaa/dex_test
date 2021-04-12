import React from "react";
import Select from "react-select";

// export const CustomSelect: React.FC<{
//   options: any;
//   onClick?: ({ ...rest }: any) => any;
//   onChange?: ({ ...rest }: any) => any;
//   placeholder?: string;
//   defaultValue?: any;
// }> = ({ ...rest }) => {
//   return <Select {...rest} styles={customStyles} />;
// };

const customStyles = {
  container: (styles: any) => {
    return {
      ...styles,
      margin: "8px 0px",
      height: "32px",
    };
  },
  control: (styles: any) => {
    return {
      ...styles,
      minHeight: "32px",
      height: "32px",
    };
  },
  valueContainer: (styles: any) => {
    return {
      ...styles,
      height: "inherit",
      position: "static !important",
    };
  },
  indicatorsContainer: (styles: any) => {
    return {
      ...styles,
      height: "inherit",
    };
  },
  indicatorContainer: (styles: any) => {
    return {
      ...styles,
      padding: "6px",
    };
  },
  menu: (styles: any) => {
    return {
      ...styles,
    };
  },
};
