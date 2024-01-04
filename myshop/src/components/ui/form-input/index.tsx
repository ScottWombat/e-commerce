import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';


const FormInput = (props:any) => (
  <GroupContainer>
    <FormInputContainer onChange={props.handleChange} {...props} />
    {props.label ? (
      <FormInputLabel className={props.value ? 'shrink' : ''}>
        {props.label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;