import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {back} from '../../constants/imgs';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack} style={styles.backbtn}>
      <Image source={back} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backbtn: {
    backgroundColor: '#007236',
    borderRadius: 10,
    color: '#fff',
    width: 40,
    height: 40,
    marginLeft: 26,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
