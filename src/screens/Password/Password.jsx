import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import NavButton from '../../components/CustomStackNavigation/NavButton';
import HeaderRight from '../../components/CustomStackNavigation/HeaderRight';
import BackButton from '../../components/CustomStackNavigation/BackButton';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {UserInputs} from '../../redux/features/Signup/SignupSlice';
import {TitleDesc, TitleParagraph, ErrorText} from '../../constants/styles';
import {setPassword} from '../../redux/features/Signup/SignupSlice';
import {PasswordContainer, PasswordInputContainer} from './Password.styles';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import {createUser} from '../../firebase/auth';
import {setAuthToken} from '../../redux/features/auth/authSlice';
import {StoreUserData} from '../../firebase/firebaseDatabase';

const Password = () => {
  const navigation = useNavigation();
  const isDarkMode = useSelector(ThemeIndicator);
  const dispatch = useDispatch();

  const newuserinputs = useSelector(UserInputs);
  console.log('from password Screen', newuserinputs);

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

  const passwordValidation = yup.object({
    password: yup
      .string()
      .required()
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        'Password must contain at least 8 characters, one uppercase, one number and one special case character',
      ),
    confirmPassword: yup
      .string()
      .required()
      .when('password', {
        is: password => (password && password.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref('password')], "Password doesn't match"),
      }),
  });

  const SubmitHandler = async (values, actions) => {
    console.log(values);
    dispatch(setPassword({password: values.password}));
    console.log(newuserinputs.email);
    console.log(values.password);
    try {
      const {token, localid} = await createUser(
        newuserinputs.email,
        values.password,
      );
      dispatch(setAuthToken(token));
      console.log('token from password', token);
      console.log('local id from password', localid);
      StoreUserData(
        localid,
        newuserinputs.firstName,
        newuserinputs.lastName,
        newuserinputs.email,
        newuserinputs.mobileNumber,
      );
      actions.resetForm();
      navigation.replace('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Failed Credentials', error.message);
    }
  };

  return (
    <PasswordContainer darkMode={isDarkMode}>
      <TitleParagraph darkMode={isDarkMode}>Set your password</TitleParagraph>
      <TitleDesc>
        Enter a strong password for your online banking account
      </TitleDesc>
      <View style={{flex: 1}}>
        <Formik
          initialValues={{password: '', confirmPassword: ''}}
          validationSchema={passwordValidation}
          onSubmit={SubmitHandler}>
          {formikprops => (
            <PasswordInputContainer>
              <View>
                <PasswordInput
                  label="Password"
                  onChangeText={formikprops.handleChange('password')}
                  value={formikprops.values.password}
                  onBlur={formikprops.handleBlur('password')}
                  placeholder="Write your password here"
                />
                <ErrorText>
                  {formikprops.touched.password && formikprops.errors.password}
                </ErrorText>
                <PasswordInput
                  label="Confirm Password"
                  onChangeText={formikprops.handleChange('confirmPassword')}
                  value={formikprops.values.confirmPassword}
                  onBlur={formikprops.handleBlur('confirmPassword')}
                  placeholder="Re-Write your password here"
                />
                <ErrorText>
                  {formikprops.touched.confirmPassword &&
                    formikprops.errors.confirmPassword}
                </ErrorText>
              </View>
              <View>
                <NavButton
                  btnName={'Submit'}
                  onPress={formikprops.handleSubmit}
                />
              </View>
            </PasswordInputContainer>
          )}
        </Formik>
      </View>
    </PasswordContainer>
  );
};

export default Password;

const styles = StyleSheet.create({});
