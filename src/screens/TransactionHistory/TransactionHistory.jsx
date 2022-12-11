import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {TransactionContainer} from './TransactionHistory.styles';
import Header from '../../components/Header/Header';
import {TitleParagraph} from '../../constants/styles';
import VerticalAccount from '../../components/VerticalAccount/VerticalAccount';
import {useEffect} from 'react';
import {BeneficiariesData} from '../../redux/features/Beneficiaries/BeneficiariesSlice';
import {useState} from 'react';
import OneTransactionHistory from '../../components/OneTransactionHistory/OneTransactionHistory';
import {useLayoutEffect} from 'react';

const TransactionHistory = () => {
  const [account, setaccount] = useState([]);
  const [transactionlength, setTransactionlength] = useState(0);
  const isDarkMode = useSelector(ThemeIndicator);
  const Accounts = useSelector(BeneficiariesData);
  const route = useRoute();
  const accountId = route.params.accountId;
  console.log('from Transaction History id***********************=', accountId);

  useLayoutEffect(() => {
    // console.log('from Transaction History ****************', Accounts.accounts);
    const accountData = Accounts.accounts.find(
      eachAccount => eachAccount.id === accountId,
    );
    console.log(
      'account data from transaction *******************',
      accountData,
    );
    setaccount(accountData);
    const historyLength = accountData.TransactionsHistory.reduce(
      (a, obj) => a + Object.keys(obj).length,
      0,
    );
    setTransactionlength(historyLength);
  }, [accountId]);
  console.log('account data from transaction history', account);
  return (
    <TransactionContainer darkMode={isDarkMode}>
      <ScrollView>
        <Header />
        <View style={{marginHorizontal: 25}}>
          <View style={{marginVertical: 25}}>
            {account && (
              <VerticalAccount
                key={account.id}
                accountId={account.id}
                firstName={account.firstName}
                lastName={account.lastName}
                image={account.image}
                arabicName={account.arabicName}
                phoneNumber={account.phoneNumber}
                balance={account.balance}
              />
            )}
          </View>
          <TitleParagraph darkMode={isDarkMode}>
            Transaction History
          </TitleParagraph>
          {account ? (
            transactionlength !== 0 ? (
              <View>
                {account.TransactionsHistory.map(item => (
                  <OneTransactionHistory
                    key={item.TransactionsId}
                    TransactionId={item.TransactionsId}
                    amount={item.amount}
                    date={item.date}
                    name={item.name}
                  />
                ))}
              </View>
            ) : (
              ''
            )
          ) : (
            ''
          )}
        </View>
      </ScrollView>
    </TransactionContainer>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({});
