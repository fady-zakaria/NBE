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
import {
  Column,
  Row,
  SmallParagraph,
  SwitchAuthContainer,
  SwitchAuthText,
} from '../../constants/styles';
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
import {LogInUser} from '../../firebase/auth';
import {useDispatch} from 'react-redux';
import {setAuthToken} from '../../redux/features/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserData} from '../../firebase/firebaseDatabase';
import {setuserData} from '../../redux/features/Signup/SignupSlice';

const LoginInput = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [RememberMe, setRememberMe] = useState(false);
  const [PassVisiablity, setPassVisiablity] = useState(false);

  const UserEmailHandler = userEmail => {
    // const Number = parseInt(userNumber);
    setEmail(userEmail);
  };

  const LoginHandler = async () => {
    // if (isNaN(username)) {
    //   Alert.alert('Invalid Username', 'Username has to be a number', [
    //     {text: 'OK', style: 'destructive', onPress: () => setUsername('')},
    //   ]);
    // }
    try {
      const {token, localid} = await LogInUser(email, userpassword);
      dispatch(setAuthToken(token));
      console.log('localid from login', localid);
      // const userData = getUserData(localid, dispatch);
      // console.log('from login', userData);
      // dispatch(
      //   setuserData({
      //     firstName: userData.firstname,
      //     lastName: userData.lastname,
      //     email: userData.email,
      //     MobileNumber: userData.mobileNumber,
      //   }),
      // );
      if (RememberMe) {
        AsyncStorage.setItem('token', token);
      }

      navigation.replace('Home', {userId: localid});
    } catch (error) {
      console.log(error);
      Alert.alert('Failed Credentials', error.message);
    }

    // console.log('Valid Username!');
  };

  const UserPasswordHandler = password => {
    setUserpassword(password);
  };

  const SignUpHandler = () => {
    navigation.replace('SignUp');
  };

  return (
    <View>
      <UserInput>
        <View style={styles.ImgContainer}>
          <Image source={userinput} />
        </View>
        <Column>
          <UserNameTitle>Email</UserNameTitle>
          <TextInput
            style={styles.input}
            onChangeText={UserEmailHandler}
            value={email}
            placeholder="Write your email here"
            // keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#DEDEDE"
          />
        </Column>
      </UserInput>
      <View style={{paddingHorizontal: 25}}>
        <PassInput>
          <View style={styles.ImgContainer}>
            <Image source={pass} />
          </View>
          <PassContainer>
            <UserPasswordTitle>Password</UserPasswordTitle>
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
          </PassContainer>
          <TouchableOpacity
            onPress={() => setPassVisiablity(!PassVisiablity)}
            style={{
              width: '10%',
            }}>
            {PassVisiablity ? (
              <Image source={passViewON} />
            ) : (
              <Image source={passViewOFF} />
            )}
          </TouchableOpacity>
        </PassInput>
      </View>
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
      <SwitchAuthContainer>
        <SwitchAuthText style={{marginRight: 10, color: '#FFFFFF'}}>
          Don’t have an account?
        </SwitchAuthText>
        <Pressable android_ripple={{color: '#ccc'}} onPress={SignUpHandler}>
          <SwitchAuthText style={{color: '#F6A721'}}>Sign up</SwitchAuthText>
        </Pressable>
      </SwitchAuthContainer>
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  ImgContainer: {
    paddingHorizontal: 23,
    width: '20%',
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
