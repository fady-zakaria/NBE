import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {useSelector} from 'react-redux';
import BackButton from '../../components/CustomStackNavigation/BackButton';
import HeaderRight from '../../components/CustomStackNavigation/HeaderRight';
import {useNavigation} from '@react-navigation/native';
import {
  AddAccountCountainer,
  AddAccountWrapper,
  AddBox,
  ImageBox,
  InputLabel,
} from './AddAccount.styles';
import {camera} from '../../constants/imgs';
import {Formik} from 'formik';
import {Row} from '../../constants/styles';

const AddAccount = () => {
  const navigation = useNavigation();
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
  const isDarkMode = useSelector(ThemeIndicator);
  // const addbtnHandler = () => {
  //     const account = {
  //       firstName: 'Dona',
  //       lastName: 'White',
  //       arabicName: '',
  //       email: 'donaW@gmail.com',
  //       phoneNumber: '+20 123 456 7890',
  //       image:
  //         'https://firebasestorage.googleapis.com/v0/b/nbe-react-native.appspot.com/o/AccountsImages%2Fuser7.png?alt=media&token=e6eaa520-f1ae-4be7-82b1-e62c90a2e8c6',
  //       bankBranch: '043 - Water Way Mall',
  //       accountNumber: 'EG150003004250008857447010180',
  //       balance: '$84,553.20',
  //       TransactionsHistory: [
  //         {
  //           TransactionsId: 0,
  //           name: 'Birthday gift for ross and rachel',
  //           date: '28-12-2020',
  //           amount: '$538,96.0',
  //         },
  //       ],
  //     };

  //     console.log(account);
  //     storeBeneficiaries(account);
  //   };
  return (
    <AddAccountCountainer darkMode={isDarkMode}>
      <AddAccountWrapper>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            imageURL: '',
            phoneNumber: '',
            accountNumber: '',
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
          }}>
          {formikprops => (
            <>
              <ImageBox>
                <Image source={camera} />
              </ImageBox>
              <Row>
                <AddBox>
                  <InputLabel>First name</InputLabel>
                  <TextInput />
                </AddBox>
                <AddBox>
                  <InputLabel>Last name</InputLabel>
                  <TextInput />
                </AddBox>
              </Row>
            </>
          )}
        </Formik>
      </AddAccountWrapper>
    </AddAccountCountainer>
  );
};

export default AddAccount;

const styles = StyleSheet.create({});
