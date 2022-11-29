import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  InputContainer,
  LabelTitle,
  Input,
  MobileInputConstant,
} from './InputField.styles';
import {Column, Row} from '../../constants/styles';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
// import {Mobile} from '../../constants/imgs';

const InputField = props => {
  const isDarkMode = useSelector(ThemeIndicator);

  const {
    oneImage,
    imagesrcLight,
    imagesrcDark,
    mobileFlag,
    label,
    keyboardType,
    placeholder,
    autoCapitalize,
    value,
    onChangeText,
    onBlur,
  } = props;

  return (
    <InputContainer darkMode={isDarkMode}>
      <View style={styles.ImgContainer}>
        {oneImage ? (
          <Image source={imagesrcLight} />
        ) : isDarkMode ? (
          <Image source={imagesrcDark} />
        ) : (
          <Image source={imagesrcLight} />
        )}
      </View>
      <Column style={{width: '100%'}}>
        <LabelTitle darkMode={isDarkMode}>{label}</LabelTitle>
        <Row>
          {mobileFlag && (
            <MobileInputConstant darkMode={isDarkMode}>+20</MobileInputConstant>
          )}
          <Input
            darkMode={isDarkMode}
            onChangeText={onChangeText}
            value={value}
            onBlur={onBlur}
            placeholder={placeholder}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoCorrect={false}
            placeholderTextColor="#B7B7B7"
          />
        </Row>
      </Column>
    </InputContainer>
  );
};

export default InputField;

const styles = StyleSheet.create({
  ImgContainer: {
    paddingHorizontal: 23,
  },
});
