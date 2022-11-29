import styled from 'styled-components/native';

export const UserListContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  margin-left: 25px;
  margin-right: 24px;
  height: 120px;
`;

export const UserContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  text-align: center;
  overflow: hidden;
  background: #f8f9fc;
  box-shadow: 2px 2px 36px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 0;
  margin: 0;
  width: 77px;
  height: 86px;
  margin-right: 13px;
  margin-top: 10px;
`;

export const UserNameText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #1c2437;
  margin-bottom: 10px;
`;
