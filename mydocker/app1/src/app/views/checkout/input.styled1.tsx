import styled from "styled-components";
export interface InputProps{
    img: string;
}
export const Form = styled.div`
position: relative;
width: 15rem;
height: 1.5rem;
margin-top:20px;
display:inline-block;
`;

export const Input = styled.input<InputProps>`
position: absolute;
top: 15px;
left: 0;
width: 100%;
height: 100%;
border: 1px solid #ccc;
font-family: inherit;
font-size: inherit;
color: #000;
outline: none;
padding: 1.25rem;
background: url(${p => p.img});
background-repeat: no-repeat;
background-position: 210px 10px;
`;

export const Label = styled.label`
position: absolute;
color: #000;
left: 1rem;
top: 1.5rem;
padding: 0 0.5rem;
cursor: text;
transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
background-color: #fff;
font-size: 0.8rem;
${Input}:focus ~ &,
${Input}:not(:placeholder-shown) ~ & {
  top: 100px;
  left: 0;
  font-size: 16px;
}
`;