import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const TransactionContainer = styled.View`
  flex: 1;
  padding-top: 30px;
  padding-bottom: 20%;
  background: ${props => (props.darkMode ? colors.Darkbg : colors.lightbg)};
`;

export const BeneficiariesHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const BeneficiariesWrapper = styled.View`
  padding-left: 25px;
  padding-right: 24px;
`;
