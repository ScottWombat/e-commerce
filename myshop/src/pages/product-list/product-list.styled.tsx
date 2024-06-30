import styled from 'styled-components';

export const ULWrapper = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid #000;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  flex-flow: row wrap;
}
`;

export const ListItem = styled.li`
float: left;
width: 50px;
box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
margin: 2px 15px;
padding: 0 20px 15px;
text-align: left;
`;

export const StyledDiv = styled.div<{displayStyle?:string;}>`
    display: ${props => props.displayStyle};
`;
interface ShowFilters{
  filterShow:boolean;
}

export const StyledFiltersDiv = styled.div<ShowFilters>`
    width: ${(props) => props.filterShow? '25%': '0%'};
    margin-left: ${(props) => props.filterShow? '0px': '0px'};
    overflow: hidden;
    transition: all 0.5s ease;
`;
export const StyledProductViewDiv = styled.div<ShowFilters>`
    width: ${(props) => props.filterShow? '75%': '100%'};
    display:inline-block;
    float:left;
`;

interface ProgressBar{
  width:number;
}
export const StyledProgressBarDiv = styled.div<{width:number}>`
    width: ${(props) => props.width}%;
    height: 4px;
    background-color: red;
    margin:1px;
    transition: width 0.4s, background-color 0.2s;
`;

