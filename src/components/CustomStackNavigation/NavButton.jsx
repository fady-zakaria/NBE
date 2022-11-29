import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavbtnTitle, Navbtn} from './NavButton.styles';

const NavButton = ({btnName, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Navbtn>
          <NavbtnTitle>{btnName}</NavbtnTitle>
        </Navbtn>
      </TouchableOpacity>
    </View>
  );
};

export default NavButton;

const styles = StyleSheet.create({});
