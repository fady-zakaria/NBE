import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {hamburger, hamburgerDark} from '../../constants/imgs';
import {useNavigation} from '@react-navigation/native';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {useSelector} from 'react-redux';

const DrawerToggleIcon = ({map}) => {
  const navigation = useNavigation();
  const isDarkMode = useSelector(ThemeIndicator);

  const OpenDrawerHandler = () => {
    navigation.toggleDrawer();
  };

  return (
    <TouchableOpacity onPress={OpenDrawerHandler} style={styles.drawerIcon}>
      <View>
        {map ? (
          <Image source={hamburger} />
        ) : isDarkMode ? (
          <Image source={hamburgerDark} />
        ) : (
          <Image source={hamburger} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default DrawerToggleIcon;

const styles = StyleSheet.create({
  drawerIcon: {
    width: 20,
    height: 20,
  },
});
