import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  TabBarButtonContainer,
  TabBarButtonContainerWithoutMarign,
} from './CustomTabBarButton.styles';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';

const CustomTabBarButton = props => {
  const {routeName, children, accessibilityState, onPress} = props;
  const isDarkMode = useSelector(ThemeIndicator);

  return (
    <>
      {routeName === 'Air Pay' ? (
        <TabBarButtonContainerWithoutMarign
          style={accessibilityState.selected && {backgroundColor: '#007236'}}
          darkMode={isDarkMode}>
          <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
        </TabBarButtonContainerWithoutMarign>
      ) : (
        <TabBarButtonContainer
          style={accessibilityState.selected && {backgroundColor: '#007236'}}
          darkMode={isDarkMode}>
          <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
        </TabBarButtonContainer>
      )}
    </>
  );
};

export default CustomTabBarButton;

const styles = StyleSheet.create({});
