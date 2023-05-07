import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {loginbg} from '../../constants/imgs';
import React, {useEffect} from 'react';
import {LoginTitle} from './login.styles';
import LoginInput from '../../components/LoginInput/LoginInput';
import Footer from '../../components/Footer/Footer';
import LoginHeader from '../../components/LoginHeader/LoginHeader';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthToken, UserAuth} from '../../redux/features/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';
import {LanguageIndicator} from '../../redux/features/ArabicMode/ArabicModeSlice';

const Login = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const userAuth = useSelector(UserAuth);
  const dispatch = useDispatch();
  // console.log('user Auth from login', userAuth);

  const isArabicLang = useSelector(LanguageIndicator);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        dispatch(setAuthToken(storedToken));
      }
    };

    fetchToken();
  }, []);
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.loginContainer}>
        <ImageBackground
          source={loginbg}
          resizeMode="cover"
          style={styles.image}>
          <View style={{paddingHorizontal: 25}}>
            <LoginHeader />
          </View>
          <View style={styles.loginContent}>
            <LoginTitle>{t('Welcome to')}</LoginTitle>
            <LoginTitle>{t('the National Bank')}</LoginTitle>
            <LoginTitle>{t('of Egypt')}</LoginTitle>
          </View>

          <LoginInput />
          <Footer />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  loginContainer: {
    flex: 1,
    height: '100%',
  },
  loginContent: {
    marginTop: 220,
    paddingBottom: 10,
  },
  image: {
    flex: 1,
  },
});
