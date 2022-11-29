import styled from 'styled-components/native';

export const BalanceContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border-radius: 22px;
  background: #003d1d;
  margin: 25px;
  width: 347px;
  height: 150px;
  overflow: hidden;
`;
export const BalanceTitleWrap = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-top: 13px;
  margin-left: 19px;
  margin-right: 11px;
`;

export const Balancetitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #f7f7f7;
`;
export const TotalBalance = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  color: #f7f7f7;
  margin-top: 27px;
`;

export const FingerPrintContainer = styled.View`
  border: 1.5px solid #f6a721;
  border-radius: 8px;
  padding: 5px;
`;
