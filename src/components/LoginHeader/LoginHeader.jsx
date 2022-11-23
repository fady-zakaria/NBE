import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Row} from '../../constants/styles';

import {logo} from '../../constants/imgs';
import ArabicBtn from '../ArabicBtn/ArabicBtn';
const LoginHeader = () => {
  return (
    <Row style={styles.loginHeader}>
      <ArabicBtn />
      <Image source={logo} />
    </Row>
  );
};

export default LoginHeader;

const styles = StyleSheet.create({
  loginHeader: {
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingHorizontal: 25,
  },
});
