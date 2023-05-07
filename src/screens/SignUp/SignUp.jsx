import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
// import {ThemeProvider} from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {setFirstInputs} from '../../redux/features/Signup/SignupSlice';
// import {UserInputs} from '../../redux/features/Signup/SignupSlice';
import {
  TitleParagraph,
  SwitchAuthContainer,
  SwitchAuthText,
  ErrorText,
  TitleDesc,
} from '../../constants/styles';
import {SignupContainer, SignUpInputContainer} from './SignUp.styles';
import NavButton from '../../components/CustomStackNavigation/NavButton';
import LoginHeader from '../../components/LoginHeader/LoginHeader';
import InputField from '../../components/InputField/InputField';
import {
  userinput,
  person,
  personDark,
  userinputDark,
} from '../../constants/imgs';

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isDarkMode = useSelector(ThemeIndicator);

  const LoginHandler = () => {
    navigation.replace('Login');
  };

  const userInputsValidation = yup.object({
    firstName: yup.string().required().min(4),
    lastName: yup.string().required().min(4),
    email: yup.string().required().email(),
  });

  return (
    <SignupContainer darkMode={isDarkMode}>
      <ScrollView>
        <View style={{paddingHorizontal: 25}}>
          <View>
            <LoginHeader />
          </View>
          <View style={{marginTop: 30}}>
            <TitleParagraph darkMode={isDarkMode}>Sign Up</TitleParagraph>
            <TitleDesc>Create a new account</TitleDesc>
            <View style={{flex: 1}}>
              <Formik
                initialValues={{firstName: '', lastName: '', email: ''}}
                validationSchema={userInputsValidation}
                onSubmit={(values, actions) => {
                  // console.log(values);
                  dispatch(
                    setFirstInputs({
                      firstName: values.firstName,
                      lastName: values.lastName,
                      email: values.email,
                    }),
                  );
                  navigation.navigate('MobileNumber');
                  actions.resetForm();
                }}>
                {formikprops => (
                  <SignUpInputContainer>
                    <View>
                      <InputField
                        oneImage={false}
                        imagesrcDark={person}
                        imagesrcLight={personDark}
                        mobileFlag={false}
                        label="First Name"
                        onChangeText={formikprops.handleChange('firstName')}
                        value={formikprops.values.firstName}
                        onBlur={formikprops.handleBlur('firstName')}
                        placeholder="Enter your first name here"
                        autoCapitalize="words"
                        keyboardType="default"
                      />
                      <ErrorText>
                        {formikprops.touched.firstName &&
                          formikprops.errors.firstName}
                      </ErrorText>
                      <InputField
                        oneImage={false}
                        imagesrcDark={person}
                        imagesrcLight={personDark}
                        mobileFlag={false}
                        label="Last Name"
                        onChangeText={formikprops.handleChange('lastName')}
                        value={formikprops.values.lastName}
                        onBlur={formikprops.handleBlur('lastName')}
                        placeholder="Enter your last name here"
                        autoCapitalize="words"
                        keyboardType="default"
                      />
                      <ErrorText>
                        {formikprops.touched.lastName &&
                          formikprops.errors.lastName}
                      </ErrorText>
                      <InputField
                        oneImage={false}
                        imagesrcDark={userinput}
                        imagesrcLight={userinputDark}
                        mobileFlag={false}
                        label="Email"
                        onChangeText={formikprops.handleChange('email')}
                        onBlur={formikprops.handleBlur('email')}
                        value={formikprops.values.email}
                        placeholder="Enter your email here"
                        // keyboardType="number-pad"
                        autoCapitalize="none"
                        keyboardType="default"
                      />
                      <ErrorText>
                        {formikprops.touched.email && formikprops.errors.email}
                      </ErrorText>
                    </View>
                    <View>
                      <NavButton
                        btnName={'Next'}
                        onPress={formikprops.handleSubmit}
                      />
                    </View>
                  </SignUpInputContainer>
                )}
              </Formik>
            </View>
          </View>
          <SwitchAuthContainer>
            <SwitchAuthText darkMode={isDarkMode} style={{marginRight: 10}}>
              Already have an account?
            </SwitchAuthText>
            <Pressable android_ripple={{color: '#ccc'}} onPress={LoginHandler}>
              <SwitchAuthText style={{color: '#F6A721'}}>Log in</SwitchAuthText>
            </Pressable>
          </SwitchAuthContainer>
        </View>
      </ScrollView>
    </SignupContainer>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
