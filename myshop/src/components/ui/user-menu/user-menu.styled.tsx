import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OptionsContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2px;
  text-align: right;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
`;

export const OptionLink = styled(Link)`
  text-transform: uppercase;
  margin: 5px 7px 7px 7px;
  cursor: pointer;
`;
export const BagOptionLink = styled(Link)`
  margin: -5px 0px 0px 0px;
  cursor: pointer;
`;