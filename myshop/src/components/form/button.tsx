import styled from 'styled-components';

const StyledButton = styled.button`
 width: 10rem;
  height: 2rem;
  cursor: pointer;
  color: ${(props)=>props.disabled?'#CCC': '#000'};
  background-color:rgba(0, 0, 0, 0.75);
  margin: 10px 0 0 0;
  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
    animation: 0.2s ease-out forwards;
    border: 5px solid #ccc;
  }
  pointer-events:${(props)=>props.disabled?'none':null};
`;

const Button1 = (props) => {
    return <StyledButton disabled={props.disabled}>{props.label}</StyledButton>;
};

export default Button1;