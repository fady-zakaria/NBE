import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const TransferContainer = styled.View`
  flex: 1;
  padding-top: 30px;
  padding-left: 25px;
  padding-right: 24px;
  background: ${props => (props.darkMode ? colors.Darkbg : colors.lightbg)};
`;

export const TransferHeader = styled.View`
  display: flex;
  flex-direction: row;
  height: 40px;
  padding-top: 16px;
  justify-content: space-between;
`;

export const TransferBox = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin-top: 5%;
  border-radius: 10px;
`;

export const InputContainer = styled.View`
  display: flex;
  /* flex-direction: row-reverse; */
  flex-direction: ${props => (props.isArabic ? 'row-reverse' : 'row')};
  /* flex-direction: row-reverse; */
  justify-content: flex-end;
  text-align: left;
  margin-right: 23px;
  margin-left: 23px;
`;

export const AmountInput = styled.TextInput`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  width: 100%;
  color: ${colors.Light_Primary};
  /* color: ${props =>
    props.darkMode ? colors.Main_white : colors.Light_Primary}; */
`;
