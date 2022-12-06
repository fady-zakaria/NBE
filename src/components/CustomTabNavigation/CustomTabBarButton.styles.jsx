import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const TabButtonText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: ${props => (props.isfocused ? '#ffffff' : '#b7b7b7')};
`;

export const TabBarButtonContainer = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  align-items: center;
  width: 17.5%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 12px;
  gap: 5px;
  margin-right: 9px;
  margin-left: 0;
  background: ${props =>
    props.darkMode ? colors.OneBottomTab_DarkBg : colors.lightbg};
  overflow: hidden;
`;

export const TabBarButtonContainerWithoutMarign = styled.View`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  align-items: center;
  width: 20%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 12px;
  gap: 5px;
  margin-right: 0px;
  margin-left: 0px;
  overflow: hidden;
  background: ${props =>
    props.darkMode ? colors.OneBottomTab_DarkBg : colors.lightbg};
`;
