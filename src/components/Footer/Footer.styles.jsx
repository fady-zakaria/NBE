import styled from 'styled-components/native';

export const FooterContainer = styled.View`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const FooterBtns = styled.View`
  display: flex;
  flex-direction: row;
`;

export const FooterBtnText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #f49322;
`;

export const FooterText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #ffffff;
`;
