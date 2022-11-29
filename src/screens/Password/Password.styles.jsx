import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const PasswordContainer = styled.View`
  /* display: flex; */
  flex: 1;
  background: ${props => (props.darkMode ? colors.Darkbg : colors.lightbg)};
  padding-left: 25px;
  padding-right: 25px;
  /* align-content: space-between;
  justify-content: space-between; */
`;

export const PasswordInputContainer = styled.View`
  display: flex;
  flex: 1;
  align-content: space-between;
  justify-content: space-between;
`;
