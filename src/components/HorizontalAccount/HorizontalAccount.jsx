import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  I18nManager,
} from 'react-native';
import React from 'react';
import {
  AccountContainer,
  AccountInfo,
  VerticalText,
} from './HorizontalAccount.styles';
import {SmallTitleParagraph} from '../../constants/styles';

const HorizontalAccount = ({
  index,
  AccountId,
  firstName,
  image,
  arabicName,
}) => {
  const accountHandler = id => {
    console.log('Account id*', id);
  };
  return (
    <View
      style={[
        {
          marginHorizontal: 5,
          flexGrow: 1,
          marginBottom: 10,
        },
        // index % 2 === 0
        //   ? {
        //       paddingRight: 5,
        //     }
        //   : {
        //       paddingLeft: 5,
        //     },
      ]}>
      <TouchableOpacity
        onPress={() => {
          accountHandler(AccountId);
        }}>
        <AccountContainer style={styles.AccountContainerStyles}>
          <View>
            <Image
              source={{uri: image}}
              style={{
                width: 43,
                height: 43,
                borderRadius: 8,
              }}
            />
          </View>
          <AccountInfo>
            {I18nManager.isRTL ? (
              arabicName ? (
                <VerticalText>{arabicName}</VerticalText>
              ) : (
                <VerticalText>{firstName}</VerticalText>
              )
            ) : (
              <VerticalText>{firstName}</VerticalText>
            )}
          </AccountInfo>
        </AccountContainer>
      </TouchableOpacity>
    </View>
  );
};

export default HorizontalAccount;

const styles = StyleSheet.create({
  AccountContainerStyles: {
    overflow: 'hidden',
    elevation: 6,
    borderRadius: 18,
  },
  //   HorizotalContainer: {
  //     // marginLeft: 13,
  //
  //   },
});
