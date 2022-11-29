import {StyleSheet, Text, View, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {logoGreen} from '../../constants/imgs';
import {DrawerTitle} from './CustomDrawer.styles';
import React from 'react';
import ArabicBtn from '../ArabicBtn/ArabicBtn';
import DarkModeButton from '../DarkModeButton/DarkModeButton';
import LogoutBtn from '../LogoutBtn/LogoutBtn';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      {/* <View style={{height: '100%', padding: 0}}> */}
      <DrawerTitle>
        <Image source={logoGreen} />
        <ArabicBtn />
      </DrawerTitle>
      <View style={styles.drawerBtnsContainer}>
        <View>
          <DrawerItemList {...props} />
          <DarkModeButton />
        </View>
        <View>
          <LogoutBtn />
        </View>
      </View>
      {/* </View> */}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerBtnsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
});
