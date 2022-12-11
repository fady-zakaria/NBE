import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const OneTransactionContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`;

export const OneTransactionWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-top: 10px;
`;

export const AmountText = styled.Text`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  color: ${props => (props.darkMode ? colors.Main_white : '#1c2437')};
`;

export const NameText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  color: ${props => (props.darkMode ? colors.Main_white : '#1c2437')};
`;

export const DateText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  color: #b7b7b7;
`;
