import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  PassContainer,
  PassInputContainer,
  PassInput,
  UserPasswordTitle,
} from './passwordinput.styles';
import {pass, passViewOFF, passViewON} from '../../constants/imgs';
import {Column} from '../../constants/styles';

const PasswordInput = props => {
  const {label, placeholder, onChangeText, value, onBlur} = props;
  const [PassVisiablity, setPassVisiablity] = useState(false);

  return (
    <PassInput>
      <View style={styles.ImgContainer}>
        <Image source={pass} />
      </View>
      <PassContainer>
        <UserPasswordTitle>{label}</UserPasswordTitle>
        {/* <PassInputContainer> */}
        <TextInput
          style={styles.passinput}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          autoCapitalize="none"
          onBlur={onBlur}
          autoCorrect={false}
          secureTextEntry={!PassVisiablity}
          // textContentType="password"
          placeholderTextColor="#B7B7B7"
        />
        {/* </PassInputContainer> */}
      </PassContainer>
      <TouchableOpacity
        onPress={() => setPassVisiablity(!PassVisiablity)}
        style={{width: '10%'}}>
        {PassVisiablity ? (
          <Image source={passViewON} />
        ) : (
          <Image source={passViewOFF} />
        )}
      </TouchableOpacity>
    </PassInput>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  ImgContainer: {
    paddingHorizontal: 23,
    width: '20%',
  },
  passinput: {
    color: '#1C2437',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
});
