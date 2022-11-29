import React, {useLayoutEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
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
// import Login from './src/screens/Login/Login';
// import MobileNumber from './src/screens/MobileNumber/MobileNumber';
// import Verification from './src/screens/Verification/Verification';
// import DrawerNavigator from './src/navigations/DrawerNavigator';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import StackNavigator from './src/navigations/StackNavigator';

// const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          {/* <SafeAreaView style={styles.appContainer}> */}
          {/* <KeyboardAvoidingView style={styles.screen} behavior="position"> */}
          <StackNavigator />
          {/* <Login /> */}
          {/* </KeyboardAvoidingView> */}
          {/* </SafeAreaView> */}
        </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  // appContainer: {
  //   flex: 1,
  //   // marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  // },
});

export default App;
