import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Transfer from '../screens/Transfer/Transfer';
import Beneficiaries from '../screens/Beneficiaries/Beneficiaries';
import ATMs from '../screens/ATMs/ATMs';
import AirPay from '../screens/AirPay/AirPay';
import CustomTabBarButton from '../components/CustomTabNavigation/CustomTabBarButton';
import TabBarButtonIcon from '../components/CustomTabNavigation/TabBarButtonIcon';
import TabBarButtonLabel from '../components/CustomTabNavigation/TabBarButtonLabel';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../redux/features/UI_Theme/UI_ThemeSlice';
import {colors} from '../utils/colors';
import InnerStackNavigator from './InnerStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const isDarkMode = useSelector(ThemeIndicator);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          styles.tabBarStyle,
          isDarkMode ? styles.tabBarDarkbg : styles.tabBarLightbg,
        ],
        tabBarButton: props => (
          <CustomTabBarButton routeName={route.name} {...props} />
        ),
        tabBarLabel: ({focused}) => {
          return (
            <TabBarButtonLabel routeName={route.name} isfocused={focused} />
          );
        },
        tabBarIcon: ({color, size, focused}) => {
          return (
            <TabBarButtonIcon routeName={route.name} isfocused={focused} />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transfer" component={Transfer} />
      <Tab.Screen name="Beneficiaries" component={InnerStackNavigator} />
      <Tab.Screen name="ATMs" component={ATMs} />
      <Tab.Screen name="Air Pay" component={AirPay} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    overflow: 'hidden',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    elevation: 4,
    height: '11%',
    paddingLeft: 6,
    paddingRight: 4,
    borderTopWidth: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarLightbg: {
    backgroundColor: colors.Main_white,
    borderTopColor: colors.Main_white,
  },
  tabBarDarkbg: {
    backgroundColor: colors.BottomTab_DarkBg,
    borderTopColor: colors.BottomTab_DarkBg,
  },
});
