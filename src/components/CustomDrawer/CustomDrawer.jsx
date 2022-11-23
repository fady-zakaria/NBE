import {StyleSheet, Text, View, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {logoGreen} from '../../constants/imgs';
import {DrawerTitle} from './CustomDrawer.styles';
import React from 'react';
import ArabicBtn from '../ArabicBtn/ArabicBtn';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerTitle>
        <Image source={logoGreen} />
        <ArabicBtn />
      </DrawerTitle>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
