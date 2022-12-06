import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const HomeContainer = styled.View`
  flex: 1;
  padding-top: 16px;
  padding-bottom: 20%;
  background: ${props => (props.darkMode ? colors.Darkbg : colors.lightbg)};
`;
