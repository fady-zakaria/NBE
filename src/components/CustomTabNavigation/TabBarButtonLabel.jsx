import {I18nManager, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {TabButtonText} from './CustomTabBarButton.styles';

const TabBarButtonLabel = ({routeName, isfocused}) => {
  const [tabBottomName, setTabBottomName] = useState('');
  useLayoutEffect(() => {
    if (I18nManager.isRTL) {
      if (routeName === 'Home') {
        setTabBottomName('الرئيسية');
      } else if (routeName === 'Transfer') {
        setTabBottomName('تحويل');
      } else if (routeName === 'Beneficiaries') {
        setTabBottomName('المستفيدون');
      } else if (routeName === 'ATMs') {
        setTabBottomName('مواقع السحب');
      } else if (routeName === 'Air Pay') {
        setTabBottomName('الدفع بNFC');
      }
    }
  }, [routeName, isfocused]);

  return (
    <>
      {I18nManager.isRTL ? (
        <TabButtonText isfocused={isfocused}>{tabBottomName}</TabButtonText>
      ) : (
        <TabButtonText isfocused={isfocused}>{routeName}</TabButtonText>
      )}
    </>
  );
};

export default TabBarButtonLabel;

const styles = StyleSheet.create({});
