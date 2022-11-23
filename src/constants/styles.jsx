import styled from 'styled-components/native';

export const Column = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

export const TitleParagraph = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #1c2437;
`;

export const SmallParagraph = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #808080;
`;

export const TitleDesc = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #b7b7b7;
`;
