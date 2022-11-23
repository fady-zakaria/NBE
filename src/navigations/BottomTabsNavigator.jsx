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

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: styles.tobBarStyle,
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
      <Tab.Screen
        name="Home"
        component={Home}
        options={
          {
            //   tabBarButton: () => {
            //     <CustomTabBarButton tabName="home" />;
            //   },
          }
        }
      />
      <Tab.Screen name="Transfer" component={Transfer} />
      <Tab.Screen name="Beneficiaries" component={Beneficiaries} />
      <Tab.Screen name="ATMs" component={ATMs} />
      <Tab.Screen name="Air Pay" component={AirPay} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({
  tobBarStyle: {
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    elevation: 4,
    height: '11%',
    paddingLeft: 6,
    paddingRight: 4,
  },
});
