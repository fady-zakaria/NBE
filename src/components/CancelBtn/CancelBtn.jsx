import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Cancelbtn, CancelbtnTitle} from './CancelBtn.styles';

const CancelBtn = ({btnName, onPress, dialog}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Cancelbtn style={[dialog && {width: 123, marginHorizontal: 17}]}>
          <CancelbtnTitle>{btnName}</CancelbtnTitle>
        </Cancelbtn>
      </TouchableOpacity>
    </View>
  );
};

export default CancelBtn;

const styles = StyleSheet.create({});
