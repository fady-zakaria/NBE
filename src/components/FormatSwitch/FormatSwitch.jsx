import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import {verticalView, horizontalView} from '../../constants/imgs';
const FormatSwitch = ({accountsFormatHandler}) => {
  return (
    <View style={{marginHorizontal: 10}}>
      <SwitchSelector
        initial={1}
        onPress={value => accountsFormatHandler(value)}
        // selectedColor={'#ffffff'}
        buttonColor={'#007236'}
        borderColor={'#ffffff'}
        borderRadius={15}
        imageStyle={{width: 14, height: 14}}
        height={30}
        hasPadding
        style={{width: 61}}
        //   buttonMargin={30}
        options={[
          {value: 'horizontal', imageIcon: horizontalView},
          {value: 'vertical', imageIcon: verticalView},
        ]}
      />
    </View>
  );
};

export default FormatSwitch;

const styles = StyleSheet.create({});
