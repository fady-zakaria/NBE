import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const AccountContainer = styled.View`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border-radius: 18px;
  width: 100%;
  padding: 14px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const AccountInfo = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const AccountWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const AccountInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding-bottom: 6px;
`;
