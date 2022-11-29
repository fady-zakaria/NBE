import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Mobile} from '../../constants/imgs';
import {TitleParagraph, TitleDesc, ErrorText} from '../../constants/styles';
import {MobileInputContainer, MobileContainer} from './MobileNumber.styles';
import MobileFooter from '../../components/MobileFooter/MobileFooter';
import NavButton from '../../components/CustomStackNavigation/NavButton';
import HeaderRight from '../../components/CustomStackNavigation/HeaderRight';
import BackButton from '../../components/CustomStackNavigation/BackButton';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {UserInputs} from '../../redux/features/Signup/SignupSlice';
// import {ThemeProvider} from 'styled-components/native';
import InputField from '../../components/InputField/InputField';
import {setMobile} from '../../redux/features/Signup/SignupSlice';

const MobileNumber = () => {
  const navigation = useNavigation();
  const isDarkMode = useSelector(ThemeIndicator);
  const dispatch = useDispatch();

  const newuserinputs = useSelector(UserInputs);
  console.log('from Mobile Number', newuserinputs);

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

  const mobileValidation = yup.object({
    mobileNumber: yup.string().required().min(11).max(11),
  });

  return (
    <MobileContainer darkMode={isDarkMode}>
      <TitleParagraph darkMode={isDarkMode}>Mobile number</TitleParagraph>
      <TitleDesc>Enter the mobile number registred in the bank</TitleDesc>
      <View style={{flex: 1}}>
        <Formik
          initialValues={{mobileNumber: ''}}
          validationSchema={mobileValidation}
          onSubmit={(values, actions) => {
            console.log(values);
            dispatch(
              setMobile({
                mobileNumber: values.mobileNumber,
              }),
            );
            navigation.navigate('CodeVerification');
            actions.resetForm();
          }}>
          {formikprops => (
            <MobileInputContainer>
              <View>
                <InputField
                  oneImage={true}
                  imagesrcLight={Mobile}
                  mobileFlag={true}
                  label="Mobile number"
                  onChangeText={formikprops.handleChange('mobileNumber')}
                  value={formikprops.values.mobileNumber}
                  onBlur={formikprops.handleBlur('mobileNumber')}
                  placeholder="Write your Mobile number here"
                  keyboardType="phone-pad"
                  autoCapitalize="none"
                />
                <ErrorText>
                  {formikprops.touched.mobileNumber &&
                    formikprops.errors.mobileNumber}
                </ErrorText>
              </View>
              <View>
                <NavButton
                  btnName={'Next'}
                  onPress={formikprops.handleSubmit}
                />
                <MobileFooter />
              </View>
            </MobileInputContainer>
          )}
        </Formik>
      </View>
    </MobileContainer>
  );
};

export default MobileNumber;

const styles = StyleSheet.create({});
