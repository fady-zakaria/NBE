import styled from 'styled-components/native';
import {colors} from '../utils/colors';

export const Column = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

export const TitleParagraph = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: ${props =>
    props.darkMode ? colors.Main_white : colors.Light_Primary};
`;

export const SmallParagraph = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #808080;
`;

export const TitleDesc = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #b7b7b7;
`;

export const SwitchAuthContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
`;

export const SwitchAuthText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${props =>
    props.darkMode ? colors.Main_white : colors.Light_Primary};
`;

export const ErrorText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #cb3333;
  margin-top: 6px;
`;
