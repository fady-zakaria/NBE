import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  I18nManager,
} from 'react-native';
import React, {useState} from 'react';
import {AddBox, InputLabel, Input} from './AddAccountBox.styles';
import {colors} from '../../utils/colors';
import {ErrorText} from '../../constants/styles';

const AddAccountBox = ({
  label,
  boxStyle,
  placeholder,
  onChangeText,
  autoCapitalize,
  keyboardType,
  value,
  onBlur,
  error,
}) => {
  const [inputBorderColor, setInputBorderColor] = useState('transparent');
  const [inputLabelColor, setInputLabelColor] = useState(colors.Light_Primary);

  const customOnFocus = () => {
    setInputBorderColor(colors.Primary_Green);
    setInputLabelColor(colors.Primary_Green);
  };
  const customOnBlur = () => {
    setInputBorderColor('transparent');
    setInputLabelColor(colors.Light_Primary);
    onBlur;
  };
  return (
    <>
      <AddBox style={[{borderColor: inputBorderColor}, boxStyle]}>
        <InputLabel style={{color: inputLabelColor}}>{label}</InputLabel>
        <TextInput
          style={styles.input}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          placeholder={placeholder}
          value={value}
          placeholderTextColor="#DEDEDE"
          onChangeText={onChangeText}
          onFocus={() => {
            customOnFocus();
          }}
          onBlur={() => {
            customOnBlur();
          }}
        />
      </AddBox>

      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
};

export default AddAccountBox;

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: colors.Light_Primary,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});
