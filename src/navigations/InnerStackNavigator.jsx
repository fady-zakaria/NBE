import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import TransactionHistory from '../screens/TransactionHistory/TransactionHistory';
import Beneficiaries from '../screens/Beneficiaries/Beneficiaries';
import AddAccount from '../screens/AddAccount/AddAccount';
import {colors} from '../utils/colors';
import {ThemeIndicator} from '../redux/features/UI_Theme/UI_ThemeSlice';

const InnerStackNavigator = () => {
  const Stack = createStackNavigator();
  const isDarkMode = useSelector(ThemeIndicator);
  const DarkmodeBg = isDarkMode ? colors.Darkbg : colors.lightbg;

  return (
    <Stack.Navigator
      initialRouteName="BeneficiariesPage"
      screenOptions={{
        headerStyle: {
          backgroundColor: DarkmodeBg,
          height: 100,
          borderBottomColor: DarkmodeBg,
          shadowColor: DarkmodeBg,
        },
        title: '',
      }}>
      <Stack.Screen
        name="BeneficiariesPage"
        component={Beneficiaries}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionHistory"
        component={TransactionHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AddAccount" component={AddAccount} options={{}} />
    </Stack.Navigator>
  );
};

export default InnerStackNavigator;

const styles = StyleSheet.create({});

// screenOptions={{
//   headerStyle: {
//     backgroundColor: DarkmodeBg,
//     height: 100,
//     borderBottomColor: DarkmodeBg,
//     shadowColor: DarkmodeBg,
//   },
//   title: '',
// }}
