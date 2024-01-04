import styled from 'styled-components';

export const SearchWrapper = styled.div`
    width: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
   
`;

export const SearchInput = styled.input`
width: 100%;
height: 2.8rem;
background: #f5f5f5;
outline: none;
border: none;
border-radius: 1.625rem;
padding: 0 3.5rem 0 1.5rem;
font-size: 1rem;
`;

export const SearchButton = styled.input.attrs({ type: 'submit' })`
  width: 3.5rem;
  height: 2.8rem;
  margin-left: -3.5rem;
  background: none;
  border: none;
  outline: none;

`;


