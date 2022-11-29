import {StyleSheet, Text, View, Image} from 'react-native';
import {logoGreen, logoDark} from '../../constants/imgs';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';

const HeaderRight = () => {
  const isDarkMode = useSelector(ThemeIndicator);
  return (
    <>
      {isDarkMode ? (
        <Image source={logoDark} style={{marginRight: 24}} />
      ) : (
        <Image source={logoGreen} style={{marginRight: 24}} />
      )}
    </>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({});
