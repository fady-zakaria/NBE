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
  EmailInput,
  EmailInputContainer,
  PassInputContainer,
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
import {useDispatch, useSelector} from 'react-redux';
import {setUserAuth} from '../../redux/features/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getUserData} from '../../redux/features/Signup/SignupSlice';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';
import {LanguageIndicator} from '../../redux/features/ArabicMode/ArabicModeSlice';

const LoginInput = () => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [RememberMe, setRememberMe] = useState(false);
  const [PassVisiablity, setPassVisiablity] = useState(false);

  const isArabicLang = useSelector(LanguageIndicator);
  // console.log('from login', isArabicLang);

  const UserEmailHandler = userEmail => {
    setEmail(userEmail);
  };

  const LoginHandler = async () => {
    try {
      const {token, localid} = await LogInUser(email, userpassword);
      dispatch(setUserAuth({token: token, userId: localid}));
      console.log('localid from login', localid);
      dispatch(getUserData(localid));

      if (RememberMe) {
        AsyncStorage.setItem('token', token);
      }

      // navigation.navigate('Home');
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
          },
        ],
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Failed Credentials', error.message);
    }
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
        <EmailInputContainer>
          <UserNameTitle>{t('Email')}</UserNameTitle>
          <EmailInput
            style={isArabicLang && {textAlign: 'right'}}
            onChangeText={UserEmailHandler}
            value={email}
            placeholder={t('Write your email here')}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#DEDEDE"
          />
        </EmailInputContainer>
      </UserInput>
      <View style={{paddingHorizontal: 25}}>
        <PassInputContainer>
          <View style={styles.ImgContainer}>
            <Image source={pass} />
          </View>
          <PassContainer>
            <UserPasswordTitle>{t('Password')}</UserPasswordTitle>
            <PassInput
              // style={styles.passinput}
              style={isArabicLang && {textAlign: 'right'}}
              onChangeText={UserPasswordHandler}
              value={userpassword}
              placeholder={t('Write your password here')}
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
        </PassInputContainer>
      </View>
      <PassCheck>
        <Row>
          <CheckBox
            value={RememberMe}
            onValueChange={setRememberMe}
            style={styles.checkbox}
            tintColors={{false: 'white', true: '#fff'}}
          />
          <SmallParagraph style={{color: '#fff'}}>
            {t('Remember me')}
          </SmallParagraph>
        </Row>
        <View>
          <Pressable android_ripple={{color: '#ccc'}}>
            <SmallParagraph style={{color: '#E4E4E4'}}>
              {t('Forget password?')}
            </SmallParagraph>
          </Pressable>
        </View>
      </PassCheck>
      <LoginBtnContainer>
        <TouchableOpacity onPress={() => LoginHandler()}>
          <LoginBtn>
            <LoginBtnText>{t('Log In')}</LoginBtnText>
          </LoginBtn>
        </TouchableOpacity>
        <TouchableOpacity>
          <FingerPrintBigContainer>
            <Image source={fingerprintbigger} />
          </FingerPrintBigContainer>
        </TouchableOpacity>
      </LoginBtnContainer>
      <SwitchAuthContainer isArabicLang={isArabicLang}>
        <SwitchAuthText style={{marginRight: 10, color: '#FFFFFF'}}>
          {t('Don’t have an account?')}
        </SwitchAuthText>
        <Pressable android_ripple={{color: '#ccc'}} onPress={SignUpHandler}>
          <SwitchAuthText style={{color: '#F6A721'}}>
            {t('Sign up')}
          </SwitchAuthText>
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
  checkbox: {
    alignSelf: 'center',
    borderRadius: 6.25,
    padding: 0,
    margin: 0,
  },
  // inputpass: {
  //   textAlign: 'right',
  // },
});
