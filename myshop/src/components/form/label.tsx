import styled from 'styled-components';
interface LabelProps {
    isAnimated: boolean;
    isError: boolean;
}


//
const StyledLabel = styled.label<LabelProps>`
color: #000;
background: red;
position: relative;
left: 50px;
top: 50px;
pointer-events: none;
transition: 300ms;
transform: translate(-50%, -50%);
width:200px;
`;

const Label1 = (props) => {
    return <StyledLabel isAnimated={props.animated} isError={props.error}/>;
};

export default Label1;