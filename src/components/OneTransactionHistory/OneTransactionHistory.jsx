import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  OneTransactionContainer,
  OneTransactionWrapper,
  AmountText,
  NameText,
  DateText,
} from './OneTransactionHistory.styles';
import {Column} from '../../constants/styles';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';

const OneTransactionHistory = ({date, name, TransactionId, amount}) => {
  const isDarkMode = useSelector(ThemeIndicator);
  return (
    <OneTransactionContainer>
      <OneTransactionWrapper style={styles.wrapper}>
        <Column>
          <NameText darkMode={isDarkMode}>{name}</NameText>
          <DateText>{date}</DateText>
        </Column>
        <View>
          <AmountText darkMode={isDarkMode}>{amount}</AmountText>
        </View>
      </OneTransactionWrapper>
    </OneTransactionContainer>
  );
};

export default OneTransactionHistory;

const styles = StyleSheet.create({
  wrapper: {
    borderBottomColor: '#b7b7b734',
    borderBottomWidth: 2,
  },
});
