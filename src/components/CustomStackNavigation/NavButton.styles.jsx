import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const NavbtnTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export const Navbtn = styled.View`
  display: flex;
  background: #007236;
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 25px;
`;

export const Backbtn = styled.TouchableOpacity`
  border-radius: 10px;
  width: 40px;
  height: 40px;
  margin-left: 26px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  background: ${props =>
    props.darkMode ? colors.Main_white : colors.back_btn_light_bg};
`;
