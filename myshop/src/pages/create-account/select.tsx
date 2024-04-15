import React, { useMemo } from "react";

import {StyledLabel,StyledSelect,StyledOption} from "src/styled/form-styled";

const mystyle = {
  display: "grid",
};
const SelectWrapper = (props) => {

  return (
    <div style={mystyle}>
      <StyledSelect onChange={(e) => props.callback(e)} id={props.itemId} width={'50px'}>
        {props.options.map(({ label, value }) => (
          <StyledOption key={value} value={value} >
         
            {label}
          
          </StyledOption>
        ))}
      </StyledSelect>
      <StyledLabel move={props.move} onClick={props.onShopPrefClick}>{props.label}</StyledLabel>
    </div>
  );
};

const Select = (props) => {
  const options = useMemo(
    () =>
      props.options.map((option) => {
        return {
          label: option.label,
          value: option.value
        };
      }),
    [props.options]
  );
  return <SelectWrapper callback={props.callback} label={props.label} itemId={props.itemId} options={options} move={props.move}/>;
};

export default Select;
