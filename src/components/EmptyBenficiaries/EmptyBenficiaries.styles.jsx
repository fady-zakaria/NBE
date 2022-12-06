import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const EmptyTitleText = styled.Text`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 6px;
  color: ${props => (props.darkMode ? colors.Main_white : '#34343F')};
`;

export const EmptyDescText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  margin-bottom: 15px;
  width: 240px;
  color: ${props => (props.darkMode ? colors.Main_white : '#464665')};
`;
