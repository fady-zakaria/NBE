import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/CustomDrawer/CustomDrawer';
import BottomTabsNavigator from './BottomTabsNavigator';
import Deposits from '../screens/Deposits/Deposits';
import {account} from '../constants/imgs';
import DrawerButtonIcon from '../components/CustomDrawer/DrawerButtonIcon';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeIndicator} from '../redux/features/UI_Theme/UI_ThemeSlice';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const isDarkMode = useSelector(ThemeIndicator);
  const DarkmodeBg = isDarkMode ? 'rgba(0, 50, 24, 0.91)' : '#F1F3FB';

  return (
    <Drawer.Navigator
      initialRouteName="Customer Services"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({route}) => ({
        drawerActiveBackgroundColor: '#007236',
        drawerActiveTintColor: '#FFFFFF',
        drawerInactiveTintColor: '#1B1B1B',
        // drawerContentContainerStyle: {
        //   height: '100%',
        //   backgroundColor: 'red',
        //   color: 'red',

        // },
        // drawerContentStyle: {
        //   height: '100%',
        // },
        drawerLabelStyle: {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: 14,
          lineHeight: 21,
          padding: 0,
          marginLeft: '-12%',
        },
        drawerStyle: {
          backgroundColor: DarkmodeBg,
          width: '83%',
          borderTopStartRadius: 0,
          borderTopEndRadius: 40,
          borderBottomEndRadius: 40,
          borderBottomStartRadius: 0,
          paddingTop: 21,
          paddingRight: 22,
        },
        drawerItemStyle: {
          borderRadius: 13,
          width: '100%',
          padding: 0,
          display: 'flex',
          justifyContent: 'flex-start',
          alignContent: 'flex-start',
        },
        drawerIcon: ({focused}) => {
          return (
            <DrawerButtonIcon routeName={route.name} isfocused={focused} />
          );
        },
      })}>
      <Drawer.Screen name="Open Certificates & Deposits" component={Deposits} />
      <Drawer.Screen
        name="Customer Services"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
