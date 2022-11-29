import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const MobileContainer = styled.View`
  /* display: flex; */
  flex: 1;
  background: ${props => (props.darkMode ? colors.Darkbg : colors.lightbg)};
  padding-left: 25px;
  padding-right: 25px;
  /* align-content: space-between;
  justify-content: space-between; */
`;

// export const MobileTitleDesc = styled.Text`
//   font-family: 'Roboto;';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 19px;
//   color: #b7b7b7;
// `;

export const MobileInputContainer = styled.View`
  display: flex;
  flex: 1;
  align-content: space-between;
  justify-content: space-between;
  /* flex-direction: row;
  background: ${props =>
    props.darkMode ? colors.Black_input_bg : colors.Main_white};
  border: 1.5px solid #007236;
  border-radius: 10px;
  margin: 21px 0px 19px 0px;
  align-items: center;
  overflow: hidden; */
`;

export const UserMobileTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #007236;
  margin-top: 11px;
`;

export const MobileInput = styled.TextInput`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${props =>
    props.darkMode ? colors.Main_white : colors.Light_Primary};
`;
