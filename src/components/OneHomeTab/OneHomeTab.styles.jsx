import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const TabContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-right: 35px; */
  /* margin-left: 32px; */
`;

export const TabImgContainer = styled.View`
  border-radius: 13px;
  display: flex;
  width: 60px;
  height: 60px;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const TabTextCont = styled.View`
  margin-top: 10px;
`;

export const TabText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${props =>
    props.darkMode ? colors.Main_white : colors.Light_Primary};
`;
