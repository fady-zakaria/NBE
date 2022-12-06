import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const AirPayContainer = styled.View`
  flex: 1;
  padding-top: 16px;
  padding-bottom: 20%;
  background: ${props => (props.darkMode ? colors.Darkbg : colors.lightbg)};
`;

export const AirPayText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: ${props => (props.darkMode ? '#ffffff' : 'green')};
  margin-left: 32px;
  margin-right: 31px;
`;

// export const DragBoxContainer = styled.Text`
//   font-family: 'Roboto';
//   font-style: normal;
//   font-size: 20px;
//   line-height: 23px;
//   text-align: center;
//   background-color: transparent;
//   border-width: 10px;
//   border-color: red;
//   /* color: ${props =>
//     props.darkMode ? rgba(255, 255, 255, 0.77) : rgba(0, 114, 54, 0.77)}; */
// `;
