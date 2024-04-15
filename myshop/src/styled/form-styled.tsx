import styled from "styled-components";


interface SelectProps {
  width: string;

}

interface LabelProps {
  color?: string;
  move: boolean;
  onClick?: () => void;
}

interface ButtonProps {
  isProcessing?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export const Button = styled.button<ButtonProps>`
  width: 10rem;
  height: 2rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color:rgba(0, 0, 0, 0.75);
  margin: 10px 0 0 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
    animation: 0.2s ease-out forwards;
    border: 5px solid #ccc;
  }
`;

export const StyledLabel = styled.label<LabelProps>`
  display: block;
  height: 18px;
  margin: ${props => props.move? '-13px 0 0 5px':'20px 0 0 5px'};
  color: ${props => props.color || '#000'};
  position:relative;
  z-index:1;
  width:210px;
  grid-area: 1 / 1;
  padding-top: 0px;
`;
export const StyledSelect = styled.select<SelectProps>`
grid-area: 1 / 1;
width: 100%;
height: 60px;
background-color: #fff;
color: #000;
font-size: 16px;
border: 1px solid #000;
margin-left: 0px;
appearance: none;
background-repeat: no-repeat;
background-position: right center;
background-size: auto 1em;
background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 612 612" fill="black"><path d="M 96.00,96.00l-96.00,96.00l 256.00,256.00l 256.00-256.00l-96.00-96.00L 256.00,256.00L 96.00,96.00z"/></svg>');
padding: 10px 50px 10px 15px;
background-position: 97% 50%;
border-style: solid;
border-width: 2px;
&:focus {
  outline: none;
`;

export const StyledOption = styled.option`
  color:#000;
  background-color: #ccc;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color:white;
`;

