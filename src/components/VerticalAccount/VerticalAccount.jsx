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

const HorizontalAccount = ({
  AccountId,
  firstName,
  lastName,
  image,
  arabicName,
  phoneNumber,
  balance,
}) => {
  const accountHandler = id => {
    console.log('Account id*', id);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          accountHandler(AccountId);
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

export default HorizontalAccount;

const styles = StyleSheet.create({
  ImageContainer: {
    overflow: 'hidden',
    elevation: 5,
    borderRadius: 8,
    width: 59,
    height: 59,
  },
});
