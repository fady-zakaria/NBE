import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  I18nManager,
  Pressable,
} from 'react-native';
import React from 'react';
import {optionIcon, telephoneIcon, moneyIcon} from '../../constants/imgs';
import {SmallTitleParagraph, SmallText} from '../../constants/styles';
import {
  AccountContainer,
  AccountInfo,
  AccountInfoWrapper,
  AccountWrapper,
} from './VerticalAccount.styles';
import {useNavigation} from '@react-navigation/native';

const VerticalAccount = ({
  accountId,
  firstName,
  lastName,
  image,
  arabicName,
  phoneNumber,
  balance,
}) => {
  const navigation = useNavigation();
  const accountHandler = id => {
    console.log('Account id*', id);
    navigation.navigate('TransactionHistory', {accountId: id});
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          accountHandler(accountId);
        }}>
        <AccountContainer>
          <AccountWrapper>
            <View style={styles.ImageContainer}>
              <Image
                source={{uri: image}}
                style={{
                  width: 59,
                  height: 59,
                  borderRadius: 8,
                }}
              />
            </View>
            <AccountInfo>
              {I18nManager.isRTL ? (
                arabicName ? (
                  <SmallTitleParagraph>{arabicName}</SmallTitleParagraph>
                ) : (
                  <SmallTitleParagraph
                    style={{
                      marginRight: 50,
                      padding: 0,
                    }}>{`${firstName} ${lastName}`}</SmallTitleParagraph>
                )
              ) : (
                <SmallTitleParagraph>{`${firstName} ${lastName}`}</SmallTitleParagraph>
              )}
              <AccountInfoWrapper style={{marginTop: 6}}>
                <Image source={telephoneIcon} />
                <SmallText>{phoneNumber}</SmallText>
              </AccountInfoWrapper>
              <AccountInfoWrapper>
                <Image source={moneyIcon} />
                <SmallText>{balance}</SmallText>
              </AccountInfoWrapper>
            </AccountInfo>
          </AccountWrapper>
          <View>
            <TouchableOpacity>
              <Image source={optionIcon} />
            </TouchableOpacity>
          </View>
        </AccountContainer>
      </TouchableOpacity>
    </View>
  );
};

export default VerticalAccount;

const styles = StyleSheet.create({
  ImageContainer: {
    overflow: 'hidden',
    elevation: 5,
    borderRadius: 8,
    width: 59,
    height: 59,
  },
});
