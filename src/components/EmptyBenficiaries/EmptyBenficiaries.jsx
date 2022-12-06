import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import AddAccount from '../AddAccount/AddAccount';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {useSelector} from 'react-redux';
import {emptyPageIcon} from '../../constants/imgs';
import {EmptyTitleText, EmptyDescText} from './EmptyBenficiaries.styles';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';

let ScreenHeight = Dimensions.get('window').height;

const EmptyBenficiaries = () => {
  const {t, i18n} = useTranslation();
  const isDarkMode = useSelector(ThemeIndicator);
  return (
    <View style={styles.emptyPage}>
      <Image source={emptyPageIcon} />
      <EmptyTitleText darkMode={isDarkMode}>
        {t('No Beneficiaries')}
      </EmptyTitleText>
      <EmptyDescText darkMode={isDarkMode}>
        {t('You don’t have beneficiaries, add some so you can send money')}
      </EmptyDescText>
      <AddAccount bgColor={'green'} />
    </View>
  );
};

export default EmptyBenficiaries;

const styles = StyleSheet.create({
  emptyPage: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',

    height: ScreenHeight / 2,
    marginTop: 50,
  },
});
