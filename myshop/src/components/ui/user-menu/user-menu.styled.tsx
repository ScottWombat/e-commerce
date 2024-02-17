import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5px;
`;

export const OptionsContainer1 = styled.div`
  display: flex;
  text-align: right;
`;

export const OptionLink = styled(Link)`
  text-transform: uppercase;
  padding: 10px 15px;
  cursor: pointer;
`;