import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Row} from '../../constants/styles';
import {logo, logoGreen} from '../../constants/imgs';
import ArabicBtn from '../ArabicBtn/ArabicBtn';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {useRoute} from '@react-navigation/native';

const LoginHeader = () => {
  const isDarkMode = useSelector(ThemeIndicator);
  const route = useRoute();
  // console.log('route', route.name);

  return (
    <Row style={styles.loginHeader}>
      <ArabicBtn />
      {route.name === 'Login' ? (
        <Image source={logo} />
      ) : isDarkMode ? (
        <Image source={logo} />
      ) : (
        <Image source={logoGreen} />
      )}
    </Row>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  loginHeader: {
    height: 40,
    justifyContent: 'space-between',
    paddingTop: 16,
    // paddingHorizontal: 25,
  },
});
