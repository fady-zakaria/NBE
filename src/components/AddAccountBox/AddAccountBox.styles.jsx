import styled from 'styled-components/native';
import {colors} from '../../utils/colors';
import {I18nManager} from 'react-native';

export const AddBox = styled.Pressable`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin-top: 5%;
  border-radius: 10px;
  padding: ${() =>
    I18nManager.isRTL ? '11px 0px 11px 16px' : '11px 16px 11px 0px'};
  width: 47.5%;
  border: 1.5px;
  border-style: solid;
  height: 75px;
`;

export const InputLabel = styled.Text`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  /* color: ${colors.Light_Primary}; */
`;

// export const Input = styled.TextInput`
//   font-family: 'Roboto';
//   font-style: normal;
//   font-size: 16px;
//   line-height: 19px;
//   /* color: ${colors.Light_Primary}; */
//   color: 'red';
// `;
