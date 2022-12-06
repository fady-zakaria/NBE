import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const AccountContainer = styled.View`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  /* border-radius: 18px; */
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 90px;
  /* margin-bottom: 10px; */
  /* margin-right: 13px; */
`;

export const AccountInfo = styled.View`
  display: flex;
  flex-direction: column;
`;

export const VerticalText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #1c2437;
  width: 100%;
  height: 16px;
  margin-top: 8px;
`;
