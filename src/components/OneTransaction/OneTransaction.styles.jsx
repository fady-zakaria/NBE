import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const TransactionContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  /* elevation: 5; */
  margin-bottom: 12px;
`;

export const TransactionText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${props =>
    props.darkMode ? colors.Main_white : colors.Light_Primary};
`;

export const TransactionDate = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #b7b7b7;
`;
