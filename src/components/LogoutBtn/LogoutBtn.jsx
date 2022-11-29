import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {Row} from '../../constants/styles';
import {logout} from '../../constants/imgs';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {removeAuthToken} from '../../redux/features/auth/authSlice';
const LogoutBtn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(removeAuthToken());
    navigation.navigate('Login');
  };

  return (
    <TouchableOpacity onPress={logoutHandler}>
      <Row style={styles.logoutBtnContainer}>
        <Image source={logout} />
        <Text style={styles.logoutBtnText}>Log Out</Text>
      </Row>
    </TouchableOpacity>
  );
};

export default LogoutBtn;

const styles = StyleSheet.create({
  logoutBtnText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    padding: 0,
    marginLeft: 10,
    color: '#EB001B',
  },
  logoutBtnContainer: {
    marginTop: 10,
    marginLeft: 15,
  },
});
