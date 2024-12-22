import styled from "styled-components";

export const AddressContainer = styled.div`
    width: 500px;
    overflow: hidden;
    height: 0px;
    transition: height 1s ease-in-out;
    font-size: 18pt;
    overflow: hidden;
    position:relative;
    top:15px;
    left:0;
`

export const StyledCheckbox = styled.input.attrs(() => ({ type: 'checkbox' }))`
    
    &:checked + ${AddressContainer}{
        height: 390px;
        transition: height 1s ease-in-out;
     }
`;

