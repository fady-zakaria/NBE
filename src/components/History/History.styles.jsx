import styled from 'styled-components/native';

export const HistoryContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 25px;
  margin-right: 24px;
  margin-top: 25px;
`;

export const TransactionContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  elevation: 5;
  margin-bottom: 12;
`;

export const TransactionText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #1c2437;
`;

export const TransactionDate = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #b7b7b7;
`;
