import {StyleSheet, Text, View, I18nManager} from 'react-native';
import React from 'react';
import {accounts, utility, cards, history} from '../../constants/imgs';
import {HomeTabsContainer} from './homeTabs.styles';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';
import OneHomeTab from '../OneHomeTab/OneHomeTab';

const HomeTabs = () => {
  const {t, i18n} = useTranslation();
  return (
    <HomeTabsContainer>
      <OneHomeTab
        name={t('Accounts')}
        image={accounts}
        color="rgba(0, 201, 116, 0.15)"
      />
      <OneHomeTab
        name={t('Cards')}
        image={cards}
        color="rgba(0, 173, 248, 0.15)"
        style={styles.middlehometab}
      />
      <OneHomeTab
        name={t('Utilities')}
        image={utility}
        color="rgba(246, 167, 33, 0.15)"
        style={[I18nManager.isRTL ? styles.righthometab : styles.lefthometab]}
      />
      <OneHomeTab
        name={t('History')}
        image={history}
        color="rgba(255, 0, 46, 0.15)"
      />
    </HomeTabsContainer>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({
  middlehometab: {
    marginHorizontal: 37,
  },
  righthometab: {
    marginRight: 37,
  },
  lefthometab: {
    marginRight: 37,
  },
});
