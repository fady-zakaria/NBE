import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ButtonComp = props => {
  // const colorbtn = props.color;
  // let imagePath = require(`../../../assets/images/${props.image}.png`);
  let imagePath = require('../../../assets/images/Notification.png');
  // console.log(imagePath);

  return (
    <View
      style={{
        backgroundColor: props.color,
        marginRight: 10,
        borderRadius: 11,
      }}>
      <TouchableOpacity
        // onPress={props.onPress}
        style={styles.btnContainer}>
        <Image source={imagePath} />
        {/* <Text>{props.btnName}</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});

export default ButtonComp;
