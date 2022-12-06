import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {
  TransactionText,
  TransactionContainer,
  TransactionDate,
} from './OneTransaction.styles';
import {Row, Column} from '../../constants/styles';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';

const OneTransaction = ({image, name, date, transaction}) => {
  const isDarkMode = useSelector(ThemeIndicator);
  return (
    <View style={{marginTop: 10, marginBottom: 2}}>
      <TransactionContainer>
        <Row>
          <Image
            source={image}
            style={{
              width: 50,
              height: 50,
              resizeMode: 'cover',
              borderRadius: 10,
              backgroundColor: '#FFFFFF',
              marginRight: 10,
            }}
          />

          <Column>
            <TransactionText darkMode={isDarkMode}>{name}</TransactionText>
            <TransactionDate>{date}</TransactionDate>
          </Column>
        </Row>
        <TransactionText darkMode={isDarkMode} style={{fontWeight: '700'}}>
          {transaction}
        </TransactionText>
      </TransactionContainer>
    </View>
  );
};

export default OneTransaction;

const styles = StyleSheet.create({});
