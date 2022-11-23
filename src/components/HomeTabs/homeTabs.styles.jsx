import styled from 'styled-components/native';

export const TabContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabImgContainer = styled.View`
  border-radius: 13px;
  display: flex;
  width: 60px;
  height: 60px;
  margin-right: 35px;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-left: 1px;
`;

export const TabTextCont = styled.View`
  margin-left: -20px;
  margin-top: 10px;
`;

export const TabText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #1c2437;
`;
