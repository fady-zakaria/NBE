import styled from 'styled-components/native';

export const UserInput = styled.View`
  display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.3);
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin: 40px 25px 0px 25px;
  align-items: center;
  overflow: hidden;
`;

export const UserNameTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-top: 11px;
`;

export const PassInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: 1.5px solid #007236;
  border-radius: 10px;
  margin: 21px 0px 19px 0px;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
`;

export const UserPasswordTitle = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #007236;
  margin-top: 11px;
`;

export const PassContainer = styled.View`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 70%;
`;

export const PassCheck = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  margin: 0px 25px 21px 25px;
  /* width: 20%; */
`;

export const LoginBtn = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #007236;
  border-radius: 12.5px;
  width: 275px;
  height: 50px;
`;

export const LoginBtnContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  margin: 0px 25px 30px 25px;
`;

export const LoginBtnText = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export const FingerPrintBigContainer = styled.View`
  border: 1.5px solid #f6a721;
  border-radius: 12.5px;
  padding: 11px;
`;

export const EmailInput = styled.TextInput`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  /* text-align: left; */
`;

export const EmailInputContainer = styled.View`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 80%;
`;

export const PassInput = styled.TextInput`
  font-family: 'Roboto';
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #1c2437;

  /* text-align: left; */
  /* text-align: ${props => (props.isArabicLang ? 'right' : 'left')}; */
  /* text-align: right; */
`;
