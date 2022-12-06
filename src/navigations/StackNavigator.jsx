import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  I18nManager,
} from 'react-native';
import React, {useLayoutEffect, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Verification from '../screens/Verification/Verification';
import MobileNumber from '../screens/MobileNumber/MobileNumber';
import DrawerNavigator from './DrawerNavigator';
import {useSelector, useDispatch} from 'react-redux';
import {
  ThemeIndicator,
  changeTheme,
} from '../redux/features/UI_Theme/UI_ThemeSlice';
import {colors} from '../utils/colors';
import SignUp from '../screens/SignUp/SignUp';
import Password from '../screens/Password/Password';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getLang} from '../redux/features/ArabicMode/ArabicModeSlice';
import {getBeneficiaries} from '../firebase/firebaseDatabase';
import {getAccountsData} from '../redux/features/Beneficiaries/BeneficiariesSlice';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (colorScheme === 'dark' && isDarkMode === false) {
      dispatch(changeTheme());
    } else if (colorScheme === 'light' && isDarkMode === true) {
      dispatch(changeTheme());
    }
  }, [colorScheme]);

  // useEffect(() => {
  // }, []);
  dispatch(getLang());

  useEffect(() => {
    dispatch(getAccountsData());
  }, []);

  // I18nManager.forceRTL(false);
  // console.log('isDarkMode', isDarkMode);
  // console.log('color scheme', colorScheme);

  const isDarkMode = useSelector(ThemeIndicator);
  const DarkmodeBg = isDarkMode ? colors.Darkbg : colors.lightbg;

  return (
    <Stack.Navigator
      initialRouteName="Login"
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
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MobileNumber"
        component={MobileNumber}
        // options={{
        //   headerBackTitleStyle: {
        //     borderRadius: 10,
        //     backgroundColor: '#007236',
        //   },
        // }}
      />
      <Stack.Screen name="CodeVerification" component={Verification} />
      <Stack.Screen name="password" component={Password} />
      <Stack.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
