import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const AddAccountCountainer = styled.View`
  flex: 1;
  padding-left: 25px;
  padding-right: 24px;
  background: ${props => (props.darkMode ? colors.Darkbg : colors.lightbg)};
`;

export const AddAccountWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const AddBox = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin-top: 5%;
  border-radius: 10px;
  padding-top: 11px;
  padding-bottom: 11px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const ImageBox = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 30px;
  width: 138px;
  height: 138px;
`;

export const InputLabel = styled.Text`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  color: #1c2437;
`;
