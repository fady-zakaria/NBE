import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackButton from '../../components/CustomStackNavigation/BackButton';
import HeaderRight from '../../components/CustomStackNavigation/HeaderRight';
import NavButton from '../../components/CustomStackNavigation/NavButton';
import {TitleParagraph, TitleDesc} from '../../constants/styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useSelector} from 'react-redux';
import {UserInputs} from '../../redux/features/Signup/SignupSlice';
import {VerificationContainer} from './Verification.styles';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';

const Verification = () => {
  const navigation = useNavigation();
  const isDarkMode = useSelector(ThemeIndicator);
  const newuserinputs = useSelector(UserInputs);
  // console.log('from verificarion', newuserinputs);
  // console.log('from verificarion', newuserinputs.mobileNumber);
  // const route = useRoute();
  // const MobileNumber = route.params.userMobileNumber;
  // console.log('mobileno. from Verification Code', MobileNumber);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return <BackButton />;
      },
      headerRight: () => {
        return <HeaderRight />;
      },
    });
  }, [navigation]);

  const CodeVerification = () => {
    navigation.navigate('password');
  };

  return (
    <VerificationContainer darkMode={isDarkMode}>
      <View>
        <TitleParagraph darkMode={isDarkMode}>Verification</TitleParagraph>
        {newuserinputs.mobileNumber && (
          <TitleDesc>
            Enter 5 digit code we sent to +2{newuserinputs.mobileNumber}
          </TitleDesc>
        )}
        <OTPInputView
          style={{height: 100}}
          pinCount={5}
          autoFocusOnLoad
          codeInputFieldStyle={styles.OTPInput}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
        />
      </View>
      <NavButton btnName={'Submit'} onPress={CodeVerification} />
    </VerificationContainer>
  );
};

export default Verification;

const styles = StyleSheet.create({
  // VerificationContainer: {
  //   display: 'flex',
  //   flex: 1,
  //   backgroundColor: '#F1F3FB',
  //   paddingHorizontal: 25,
  //   alignContent: 'space-between',
  //   justifyContent: 'space-between',
  // },
  OTPInput: {
    color: '#1C2437',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 4,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
});
