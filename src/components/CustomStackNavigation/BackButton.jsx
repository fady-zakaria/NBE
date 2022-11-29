import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {back, backDark} from '../../constants/imgs';
import {useNavigation} from '@react-navigation/native';
import {Backbtn} from './NavButton.styles';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';

const BackButton = () => {
  const navigation = useNavigation();
  const isDarkMode = useSelector(ThemeIndicator);

  return (
    <Backbtn onPress={navigation.goBack} darkMode={isDarkMode}>
      {isDarkMode ? <Image source={backDark} /> : <Image source={back} />}
    </Backbtn>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backbtn: {
    // backgroundColor: '#007236',
    // borderRadius: 10,
    // color: '#fff',
    // width: 40,
    // height: 40,
    // marginLeft: 26,
    // display: 'flex',
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // overflow: 'hidden',
  },
});
