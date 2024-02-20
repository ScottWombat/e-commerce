import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OptionsContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2px;
  background-color: red;
  text-align: right;
`;

export const OptionsContainer = styled.div`
  display: flex;
  text-align: right;
`;

export const OptionLink = styled(Link)`
  text-transform: uppercase;
  margin: 10px 5px 5px 5px;
  cursor: pointer;
`;