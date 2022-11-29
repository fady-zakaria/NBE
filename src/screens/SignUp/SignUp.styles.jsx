import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const SignupContainer = styled.View`
  flex: 1;
  /* display: flex; */
  background: ${props => (props.darkMode ? colors.Darkbg : colors.lightbg)};
  /* flex-direction: column; */
`;

export const SignUpInputContainer = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-content: space-between;
`;
