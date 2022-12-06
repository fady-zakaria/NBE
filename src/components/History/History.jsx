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
import OneTransaction from '../OneTransaction/OneTransaction';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';

// const Item = ({name, image, date, transaction}) => (
//   <TransactionContainer>
//     <Row>
//       <Image
//         source={image}
//         style={{
//           width: 50,
//           height: 50,
//           resizeMode: 'cover',
//           borderRadius: 10,
//           backgroundColor: '#FFFFFF',
//           marginRight: 10,
//         }}
//       />

//       <Column>
//         <TransactionText>{name}</TransactionText>
//         <TransactionDate>{date}</TransactionDate>
//       </Column>
//     </Row>
//     <TransactionText style={{fontWeight: '700'}}>{transaction}</TransactionText>
//   </TransactionContainer>
// );

const History = () => {
  const {t, i18n} = useTranslation();
  // const renderItem = ({item}) => (
  //   <Item
  //     name={item.name}
  //     image={item.icon}
  //     date={item.date}
  //     transaction={item.transaction}
  //   />
  // );
  // console.log('TransactionsHistory', TransactionsHistory);
  return (
    <HistoryContainer>
      <HomeContentTitle title={t('History')} viewAll={t('all transactions')} />

      {TransactionsHistory.map(item => {
        return (
          <OneTransaction
            key={item.id}
            name={item.name}
            image={item.icon}
            date={item.date}
            transaction={item.transaction}
          />
        );
      })}
      {/* {TransactionsHistory.map(item => {
          return (
            <View key={item.id}>
              <Text>{item.name}</Text>
            </View>
          );
        })} */}
      {/*<FlatList
        //   data={TransactionsHistory}
        //   renderItem={renderItem}
        //   keyExtractor={item => item.id}
        //   contentContainerStyle={{
        //     marginBottom: 2,
        //   }}
        // /> */}
    </HistoryContainer>
  );
};

export default History;

const styles = StyleSheet.create({});
