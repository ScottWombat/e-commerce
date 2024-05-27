import React, { useMemo } from "react";

import {StyledLabel,StyledSelect,StyledOption} from "src/styled/form-styled";

const mystyle = {
  display: "grid",
};
const SelectWrapper = (props) => {

  return (
    <div style={mystyle}>
      <StyledSelect  onChange={(e) => props.shopPrefOnChange(e)} id={props.id} name={props.name} width={'50px'}>
        {props.options.map(({ label, value }) => (
          <StyledOption key={value} value={value} >
         
            {label}
          
          </StyledOption>
        ))}
      </StyledSelect>
      <StyledLabel move={props.move} onClick={props.shopPrefLabelOnClick}>{props.label}</StyledLabel>
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
  return <SelectWrapper id={props.id} name={props.name} shopPrefOnChange={props.shopPrefOnChange} label={props.label} itemId={props.itemId} options={options} move={props.move} shopPrefLabelOnClick={props.shopPrefLabelOnClick} onblur={props.onblur}/>;
};

export default Select;
