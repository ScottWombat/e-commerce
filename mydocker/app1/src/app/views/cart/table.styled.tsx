import styled from "styled-components";
const Header = styled.div`
    font-weight: 600;
    font-size:28px;
    border-bottom: 1pt solid black;
`
const TableCell = styled.div`
    display: table-cell;
    padding: 7px;
`;
export const TableHeader = styled(Header)`
    display: table-row;
    border-bottom: 1px solid black;
`;
export const Table = styled.div`
    display: table;
    font-family: sans-serif;
    margin: 1em auto;
    border-collapse: collapse; 
    border-spacing: 0;
    padding:0;
    width:100%;
`;


export const ItemsHeader = styled(TableCell)`
    width:5%;
`;
export const DescriptionHeader = styled(Header)`
    width:75%;
`;
export const PriceHeader = styled(Header)`
    width:5%;
`;
export const QuantityHeader = styled(Header)`
    width:5%;
`;
export const SubtotalHeader = styled(Header)`
    width:5%;
`;
export const RemoveHeader = styled(Header)`
    width:5%;
`;

