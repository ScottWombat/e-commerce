import styled from "styled-components";

interface Props {
    open:boolean
}


interface WrapperProps {
    open:boolean
}

/* text box */
export const CountryWrapper = styled.div<WrapperProps>`
    width:100px;
    height: ${ p => p.open?'150px':'50px'};
    transition: height 4s;
`;

export const CountryInput = styled.input`
    width:100px;
    height:50px;
;`

export const SelectWrapper = styled.div<WrapperProps>`
    width:100px;
    height: ${ p => p.open?'150px':'0px'};
    background-color: ${ p => p.open?'red':'yellow'};
    display:none;
`;

export const AddressWrapper=styled.div<WrapperProps>`
    display:inline-block;
    height: ${ p => p.open?'150px':'150px'};
    transition: height 2s ease-out;
`;

interface CountryProps {
    open:boolean
}
export const CountryUl=styled.ul<CountryProps>`
    width:400px;
    height: ${ p => p.open?'100px':'0'};
    border: 1px solid black;
    background-color:#fff;
    color:#000;
    position:relative;
    font-size:18px;
    overflow-y:scroll;
  
`;

export const CountryLi = styled.li`
   height: 20px;
   display: block;
   margin: 0px 0px 10px 20px;
`;


export const Span = styled.span`
    display:block;
    line-height:30px;
    padding-bottom:10px;
`

export const Span1 = styled.span<Props>`
    display:${ p => p.open?'block':'none'};
    
    transition: all 2s ease-out;
`

export const Label = styled.label`
background: red;
display: block;
padding: 1rem;
`;

export const Content = styled.div`
  
   background-color:red; 
   
`;



export const AddressButton = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

export const InputText = styled.input`
    width:150px;
`;

export const ContentWrapper = styled.div<Props>`
    
`;
