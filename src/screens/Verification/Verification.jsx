import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackButton from '../../components/NavigationEdit/BackButton';
import HeaderRight from '../../components/NavigationEdit/HeaderRight';
import NavButton from '../../components/NavigationEdit/NavButton';
import {TitleParagraph, TitleDesc} from '../../constants/styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Verification = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const MobileNumber = route.params.userMobileNumber;
  console.log('mobileno. from Verification Code', MobileNumber);
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
    navigation.navigate('Home');
  };

  return (
    <View style={styles.VerificationContainer}>
      <View>
        <TitleParagraph>Verification</TitleParagraph>
        {MobileNumber && (
          <TitleDesc>Enter 5 digit code we sent to +{MobileNumber}</TitleDesc>
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
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  VerificationContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F1F3FB',
    paddingHorizontal: 25,
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
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
