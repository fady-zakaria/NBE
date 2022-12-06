import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  I18nManager,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  BeneficiariesContainer,
  BeneficiariesHeader,
  BeneficiariesWrapper,
  AccountInfo,
  AccountContainer,
  AccountWrapper,
  AccountInfoWrapper,
} from './Beneficiaries.styles';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import Header from '../../components/Header/Header';
import AddAccount from '../../components/AddAccount/AddAccount';
import {Column, Row, TitleParagraph} from '../../constants/styles';
import {BeneficiariesData} from '../../redux/features/Beneficiaries/BeneficiariesSlice';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';
import HorizontalAccount from '../../components/HorizontalAccount/HorizontalAccount';
import VerticalAccount from '../../components/VerticalAccount/VerticalAccount';
import FormatSwitch from '../../components/FormatSwitch/FormatSwitch';
import EmptyBenficiaries from '../../components/EmptyBenficiaries/EmptyBenficiaries';

const Beneficiaries = () => {
  const [accountsFormat, setAccountsFormat] = useState('vertical');
  console.log(accountsFormat);
  const isDarkMode = useSelector(ThemeIndicator);
  const Accounts = useSelector(BeneficiariesData);
  // let Accounts = {accounts: []};

  // console.log('Accounts from Beneficiaries', Object.values(Accounts));
  // for (const id in Accounts) {
  // }
  const {t, i18n} = useTranslation();
  const renderItem = ({item, index}) => (
    <HorizontalAccount
      index={index}
      AccountId={item.id}
      firstName={item.firstName}
      image={item.image}
      arabicName={item.arabicName}
    />
  );
  const accountsFormatHandler = value => {
    setAccountsFormat(value);
  };

  return (
    <>
      <BeneficiariesContainer darkMode={isDarkMode}>
        <ScrollView>
          <Header />
          <BeneficiariesWrapper>
            <BeneficiariesHeader>
              <TitleParagraph darkMode={isDarkMode}>
                {t('Beneficiaries')}
              </TitleParagraph>
              <Row>
                <FormatSwitch accountsFormatHandler={accountsFormatHandler} />
                <AddAccount bgColor={'white'} />
              </Row>
            </BeneficiariesHeader>
            {Accounts.accounts.length !== 0 ? (
              accountsFormat === 'horizontal' ? (
                <View style={{marginTop: 25, paddingBottom: 25}}>
                  <FlatList
                    data={Accounts.accounts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={4}
                    columnWrapperStyle={{
                      justifyContent: 'space-around',
                      paddingTop: 5,
                    }}
                  />
                </View>
              ) : (
                <>
                  <View style={{marginTop: 25}}>
                    {Accounts.accounts.map(item => (
                      <VerticalAccount
                        key={item.id}
                        AccountId={item.id}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        image={item.image}
                        arabicName={item.arabicName}
                        phoneNumber={item.phoneNumber}
                        balance={item.balance}
                      />
                    ))}
                  </View>
                </>
              )
            ) : (
              <EmptyBenficiaries />
            )}
          </BeneficiariesWrapper>
        </ScrollView>
      </BeneficiariesContainer>
    </>
  );
};

export default Beneficiaries;

const styles = StyleSheet.create({});
