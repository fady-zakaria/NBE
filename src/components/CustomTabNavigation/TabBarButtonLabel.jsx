import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TabButtonText} from './CustomTabBarButton.styles';

const TabBarButtonLabel = ({routeName, isfocused}) => {
  return (
    <>
      {isfocused ? (
        <TabButtonText style={{color: '#FFFFFF'}}>{routeName}</TabButtonText>
      ) : (
        <TabButtonText>{routeName}</TabButtonText>
      )}
    </>
  );
};

export default TabBarButtonLabel;

const styles = StyleSheet.create({});
