import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const PassInput = styled.View`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: 1.5px solid #007236;
  border-radius: 10px;
  /* margin: 21px 0px 0px 0px; */
  margin-top: 21px;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
`;

export const PassContainer = styled.View`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 70%;
`;

export const PassInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  overflow: hidden;
`;

export const UserPasswordTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #007236;
  margin-top: 11px;
`;
