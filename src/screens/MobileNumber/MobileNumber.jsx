import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Mobile} from '../../constants/imgs';
import {Column, TitleParagraph, TitleDesc, Row} from '../../constants/styles';
import {MobileInputContainer, UserMobileTitle} from './MobileNumber.styles';
import MobileFooter from '../../components/MobileFooter/MobileFooter';
import NavButton from '../../components/NavigationEdit/NavButton';
import HeaderRight from '../../components/NavigationEdit/HeaderRight';
import BackButton from '../../components/NavigationEdit/BackButton';

const MobileNumber = () => {
  const navigation = useNavigation();
  const [userMobile, setUserMobile] = useState('');
  const UserMobileHandler = userNumber => {
    // const Number = parseInt(userNumber);
    setUserMobile(userNumber);
  };
  const UserMobileValidation = () => {
    const NumberString = '+20' + userMobile;
    const Number = parseInt(NumberString);
    console.log('mobileno. from Mobile Number', Number);
    console.log('Valid MobileNumber!');
    navigation.navigate('CodeVerification', {userMobileNumber: Number});
  };
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
  return (
    <View style={styles.mobileContainer}>
      <View>
        <TitleParagraph>Mobile number</TitleParagraph>
        <TitleDesc>Enter the mobile number registred in the bank</TitleDesc>
        <MobileInputContainer>
          <View style={styles.ImgContainer}>
            <Image source={Mobile} />
          </View>
          <Column style={{width: '100%'}}>
            <UserMobileTitle>Mobile number</UserMobileTitle>
            <Row>
              <Text style={styles.MobileInput}>+20</Text>
              <TextInput
                style={styles.MobileInput}
                onChangeText={UserMobileHandler}
                value={userMobile}
                placeholder="Write your Mobile number here"
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="#B7B7B7"
              />
            </Row>
          </Column>
        </MobileInputContainer>
      </View>
      <View>
        <NavButton btnName={'Next'} onPress={UserMobileValidation} />
        <MobileFooter />
      </View>
    </View>
  );
};

export default MobileNumber;

const styles = StyleSheet.create({
  mobileContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#F1F3FB',
    paddingHorizontal: 25,
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  ImgContainer: {
    paddingHorizontal: 23,
  },
  MobileInput: {
    color: '#1C2437',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
});
