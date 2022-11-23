import styled from 'styled-components/native';

export const TabButtonText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #b7b7b7;
`;

export const TabBarButtonContainer = styled.View`
  display: flex;
  flex-dirction: column;
  background: #f1f3fb;
  border-radius: 16px;
  align-items: center;
  width: 17.5%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 12px;
  gap: 5px;
  margin-right: 9px;
  margin-left: 0;
`;

export const TabBarButtonContainerWithoutMarign = styled.View`
  display: flex;
  flex-dirction: column;
  background: #f1f3fb;
  border-radius: 16px;
  align-items: center;
  width: 20%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-bottom: 12px;
  gap: 5px;
  margin-right: 0px;
  margin-left: 0px;
`;
