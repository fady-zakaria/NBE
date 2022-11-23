import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Column, Row, SmallParagraph} from '../../constants/styles';
import {
  UserInput,
  UserNameTitle,
  PassInput,
  UserPasswordTitle,
  PassContainer,
  PassCheck,
  LoginBtn,
  LoginBtnContainer,
  FingerPrintBigContainer,
  LoginBtnText,
  SignupContainer,
  SignupText,
} from './LoginInput.styles';
import {
  userinput,
  pass,
  passViewOFF,
  passViewON,
  fingerprintbigger,
} from '../../constants/imgs';
import {useNavigation} from '@react-navigation/native';

const LoginInput = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [RememberMe, setRememberMe] = useState(false);
  const [PassVisiablity, setPassVisiablity] = useState(false);

  const UserNameHandler = userNumber => {
    const Number = parseInt(userNumber);
    setUsername(Number);
  };

  const LoginHandler = () => {
    if (isNaN(username)) {
      Alert.alert('Invalid Username', 'Username has to be a number', [
        {text: 'OK', style: 'destructive', onPress: () => setUsername('')},
      ]);
    }
    console.log('Valid Username!');
    navigation.navigate('MobileNumber');
  };

  const UserPasswordHandler = password => {
    setUserpassword(password);
  };

  return (
    <View>
      <UserInput>
        <View style={styles.ImgContainer}>
          <Image source={userinput} />
        </View>
        <Column>
          <UserNameTitle>Username</UserNameTitle>
          <TextInput
            style={styles.input}
            onChangeText={UserNameHandler}
            value={username}
            placeholder="Write your email here"
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#DEDEDE"
          />
        </Column>
      </UserInput>
      <PassInput>
        <View style={styles.ImgContainer}>
          <Image source={pass} />
        </View>
        <Column style={{width: '100%'}}>
          <UserPasswordTitle>Password</UserPasswordTitle>
          <PassContainer>
            <TextInput
              style={styles.passinput}
              onChangeText={UserPasswordHandler}
              value={userpassword}
              placeholder="Write your password here"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={!PassVisiablity}
              // textContentType="password"
              placeholderTextColor="#B7B7B7"
            />
            <TouchableOpacity
              onPress={() => setPassVisiablity(!PassVisiablity)}>
              {PassVisiablity ? (
                <Image source={passViewON} />
              ) : (
                <Image source={passViewOFF} />
              )}
            </TouchableOpacity>
          </PassContainer>
        </Column>
      </PassInput>
      <PassCheck>
        <Row>
          <CheckBox
            value={RememberMe}
            onValueChange={setRememberMe}
            style={styles.checkbox}
            tintColors={{false: 'white', true: '#fff'}}
          />
          <SmallParagraph style={{color: '#fff'}}>Remember me</SmallParagraph>
        </Row>
        <View>
          <Pressable android_ripple={{color: '#ccc'}}>
            <SmallParagraph style={{color: '#E4E4E4'}}>
              Forget password?
            </SmallParagraph>
          </Pressable>
        </View>
      </PassCheck>
      <LoginBtnContainer>
        <TouchableOpacity onPress={() => LoginHandler()}>
          <LoginBtn>
            <LoginBtnText>Log In</LoginBtnText>
          </LoginBtn>
        </TouchableOpacity>
        <TouchableOpacity>
          <FingerPrintBigContainer>
            <Image source={fingerprintbigger} />
          </FingerPrintBigContainer>
        </TouchableOpacity>
      </LoginBtnContainer>
      <SignupContainer>
        <SignupText style={{marginRight: 10}}>
          Don’t have an account?
        </SignupText>
        <Pressable android_ripple={{color: '#ccc'}}>
          <SignupText style={{color: '#F6A721'}}>Sign up</SignupText>
        </Pressable>
      </SignupContainer>
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  ImgContainer: {
    paddingHorizontal: 23,
  },
  input: {
    color: 'white',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  passinput: {
    color: '#1C2437',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  checkbox: {
    alignSelf: 'center',
    borderRadius: 6.25,
    padding: 0,
    margin: 0,
  },
});
