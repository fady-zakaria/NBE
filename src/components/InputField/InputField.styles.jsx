import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  background: ${props =>
    props.darkMode ? colors.Black_input_bg : colors.Main_white};
  border: 1.5px solid #007236;
  border-radius: 10px;
  margin: 21px 0px 19px 0px;
  align-items: center;
  overflow: hidden;
`;

export const LabelTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.darkMode ? colors.Main_white : '#007236')};
  margin-top: 11px;
`;

export const Input = styled.TextInput`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${props =>
    props.darkMode ? colors.Main_white : colors.Light_Primary};
`;

export const MobileInputConstant = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${props =>
    props.darkMode ? colors.Main_white : colors.Light_Primary};
`;
