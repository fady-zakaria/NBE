import {StyleSheet, Text, View, Image} from 'react-native';
import {logoGreen} from '../../constants/imgs';
import React from 'react';

const HeaderRight = () => {
  return (
    <>
      <Image source={logoGreen} style={{marginRight: 24}} />
    </>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({});
