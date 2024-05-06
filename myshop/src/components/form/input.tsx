import styled from 'styled-components';
interface InputProps {
    name:string;
    id:string;
    ref:any;
}

const StyledInput = styled.input<InputProps>`
    width:100%;
    background-color:transparent;
    box-shadow:none;
    padding:20px 0;
    border: 2px solid #000;
    color: #000;
    text-indent: 20px;

`;

const Input = (props) => {
    return <StyledInput ref={props.ref} onBlur={(e) => props.onblur(e)} onChange={(e) => props.onchange(e)} name={props.name} id={props.id} value={props.value}/>;
};

export default Input;

