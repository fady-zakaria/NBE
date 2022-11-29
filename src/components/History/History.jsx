import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import {
  HistoryContainer,
  TransactionContainer,
  TransactionText,
  TransactionDate,
} from './History.styles';
import HomeContentTitle from '../HomeContentTitle/HomeContentTitle';
import {TransactionsHistory} from '../../fakers/dummyData';
import {Column, Row} from '../../constants/styles';

const Item = ({name, image, date, transaction}) => (
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
        <TransactionText>{name}</TransactionText>
        <TransactionDate>{date}</TransactionDate>
      </Column>
    </Row>
    <TransactionText style={{fontWeight: '700'}}>{transaction}</TransactionText>
  </TransactionContainer>
);

const History = () => {
  const renderItem = ({item}) => (
    <Item
      name={item.name}
      image={item.icon}
      date={item.date}
      transaction={item.transaction}
    />
  );
  return (
    <HistoryContainer>
      <HomeContentTitle title="History" />
      <View style={{marginTop: 10}}>
        <FlatList
          data={TransactionsHistory}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            marginBottom: 2,
          }}
        />
      </View>
    </HistoryContainer>
  );
};

export default History;

const styles = StyleSheet.create({});
