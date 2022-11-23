import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  TabBarButtonContainer,
  TabBarButtonContainerWithoutMarign,
} from './CustomTabBarButton.styles';

const CustomTabBarButton = props => {
  const {routeName, children, accessibilityState, onPress} = props;
  console.log('route from bar btn', routeName);

  return (
    <>
      {routeName === 'Air Pay' ? (
        <TabBarButtonContainerWithoutMarign
          style={accessibilityState.selected && {backgroundColor: '#007236'}}>
          <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
        </TabBarButtonContainerWithoutMarign>
      ) : (
        <TabBarButtonContainer
          style={accessibilityState.selected && {backgroundColor: '#007236'}}>
          <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
        </TabBarButtonContainer>
      )}
    </>
  );
};

export default CustomTabBarButton;

const styles = StyleSheet.create({});
