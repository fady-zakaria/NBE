import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {NavbtnTitle, Navbtn} from './NavButton.styles';

const NavButton = ({btnName, onPress, dialog}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Navbtn
          style={[
            dialog === 'right' && {width: 311},
            dialog === 'wrong' && {width: 167},
          ]}>
          <NavbtnTitle>{btnName}</NavbtnTitle>
        </Navbtn>
      </TouchableOpacity>
    </View>
  );
};

export default NavButton;

const styles = StyleSheet.create({});
