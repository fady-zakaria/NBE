import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const CancelbtnTitle = styled.Text`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #eb001b;
`;

export const Cancelbtn = styled.View`
  display: flex;
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 25px;
  background: #ffffff;
  border: 1px solid #eb001b;
`;
