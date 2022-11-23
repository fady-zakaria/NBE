import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  KeyboardAvoidingView,
} from 'react-native';
// import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import {colors} from './src/utils/colors';
import MobileNumber from './src/screens/MobileNumber/MobileNumber';
import Verification from './src/screens/Verification/Verification';
import DrawerNavigator from './src/navigations/DrawerNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        {/* <SafeAreaView style={styles.appContainer}> */}
        {/* <KeyboardAvoidingView style={styles.screen} behavior="position"> */}
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#F1F3FB',
              height: 100,
            },
            title: '',
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MobileNumber"
            component={MobileNumber}
            options={{
              headerBackTitleStyle: {
                borderRadius: 10,
                backgroundColor: '#007236',
              },
            }}
          />
          <Stack.Screen
            name="CodeVerification"
            component={Verification}
            options={{
              headerBackTitleStyle: {
                borderRadius: 10,
                backgroundColor: '#007236',
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={DrawerNavigator}
            options={{headerShown: false}}
          />
        </Stack.Navigator>

        {/* <Login /> */}
        {/* </KeyboardAvoidingView> */}
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.lightbg,
  },
});

export default App;
