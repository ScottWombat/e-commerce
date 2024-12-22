import styled from "styled-components";
export interface InputProps{
    img?: string;
    width?: string;
    img_position?:string;
    onFocus?: () => void;
    display?:string;
}
export const Wrapper1 = styled.div`
    position: relative;
    width: 20rem;
    height: 1.5rem;
    margin-top:10px;
    display:inline-block;
    onFocus:boolean;
`;

export const Input = styled.input<InputProps>`
font-size: 16px;
padding: 10px 10px 10px 15px;
display: block;
width: ${p => p.width};
margin-top:15px;
border: 1px solid #757575;
background: url(${p => p.img});
background-repeat: no-repeat;
background-position: ${p => p.img_position};
&:focus {
  outline: none;
  box-shadow: 0px 0px 2px red;
}
`;

export const Label = styled.label`
  color: #999;
  font-size: 0.8rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 25px;
  padding: 0 0.5rem;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: #fff;
  ${Input}:focus ~ &,
  ${Input}:not(:placeholder-shown) ~ & {
    top: 3px;
    font-size: 0.8rem;
    color: #5264ae;
  }
`;

export const ButtonWrapper = styled.div<InputProps>`
  width:100%;
  display:${p => p.display}
`;


export const Input1 = styled.input<InputProps>`
font-size: 16px;
padding: 10px 10px 10px 15px;
display: block;
width: 550px;

border: 1px solid #757575;
background: url(${p => p.img});
background-repeat: no-repeat;
background-position: 250px 10px;
&:focus {
  outline: none;
}
`;

export const Label1 = styled.label`
  color: #999;
  font-size: 0.8rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 10px;
  top: 8px;
  padding: 0 0.5rem;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: #fff;
  ${Input}:focus ~ &,
  ${Input}:not(:placeholder-shown) ~ & {
    top: -10px;
    font-size: 0.8rem;
    color: #5264ae;
  }
`;