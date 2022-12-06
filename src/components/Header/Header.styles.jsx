import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const MorningText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.darkMode ? colors.Main_white : colors.Main_black)};
`;

export const UserName = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${props => (props.darkMode ? colors.Main_white : colors.Main_black)};
`;
