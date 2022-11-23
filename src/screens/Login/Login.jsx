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
import React from 'react';
import {LoginTitle} from './login.styles';
import LoginInput from '../../components/LoginInput/LoginInput';
import Footer from '../../components/Footer/Footer';
import LoginHeader from '../../components/LoginHeader/LoginHeader';

const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.loginContainer}>
        <ImageBackground
          source={loginbg}
          resizeMode="cover"
          style={styles.image}>
          <LoginHeader />
          <View style={styles.loginContent}>
            <LoginTitle numberOfLines={3}>
              Welcome to {'\n'}
              The National Bank of Egypt
            </LoginTitle>
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
    marginTop: '50%',
  },
  image: {
    flex: 1,
  },
});
