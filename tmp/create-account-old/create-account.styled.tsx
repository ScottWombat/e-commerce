import styled from "styled-components";

export const SelectInput = styled.select`
  display: flex;
  width: 300px;
  height: 2em;
  border-radius: 5px;
  border: none;
  background: #ccc;
  margin-top: 1.5em};
  &:focus {
    outline: none;
    border: 1px solid #6e5dcc;
  }
  `;
interface LabelProps {
  blur: boolean;

}

export const LabelText = styled.label<LabelProps>`
  position: absolute;
  margin-top: ${props => props.blur ? '-50px' : '-20px'};;
  left: 0;
  font-size: 18px;
  line-height: 16px;
  pointer-events: none;
  transition: 0.5s;
  color: #000;
  ${SelectInput}:focus ~ & {
    margin-top: -50px};
    left: 0;
    color: red;
    font-size: 16px;
  }
`;

export const TextBox1 = styled.input`
  display: flex;
  width: 200px;
  height: 2em;
  border-radius: 5px;
  border: 1px solid #ccc;;
  background: #fff;
  margin-top: 0px;
  &:focus {
    outline: none;
    border: 5px solid #6e5dcc;
  }
`;

export const LabelText1 = styled.label`
  position:absolute;
  margin-top: -20px;
  left: 10px;
  font-size: 18px;
  line-height: 16px;
  pointer-events: none;
  transition: 0.5s;
  color: #ccc;
  ${TextBox1}:focus ~ &,
  ${TextBox1}:not(:placeholder-shown) ~ & {
    top: -10px;
    left: 0;
    color: blue;
    font-size: 16px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 60%;
  margin-top: 160px;
  background-color: #c0c0c0;
`;

export const SubmitButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
  width: 90%;
  height: 50px;
  border-radius: 25px;
  background: #ccc;
  
`;
