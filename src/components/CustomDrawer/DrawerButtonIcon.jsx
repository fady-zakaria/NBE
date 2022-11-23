import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {
  calculators,
  cardsServices,
  darkMode,
  customerService,
  accountSummary,
  deposits,
  payment,
  offers,
  token,
  logout,
} from '../../constants/imgs';

const DrawerButtonIcon = ({routeName, isfocused}) => {
  const [ImageSource, setImageSource] = useState();
  console.log('route name', routeName);
  useLayoutEffect(() => {
    if (routeName === 'Customer Services') {
      setImageSource(customerService);
    } else if (routeName === 'Open Certificates & Deposits') {
      setImageSource(deposits);
    }
  }, [routeName]);

  return <Image source={ImageSource} style={styles.imageContainer} />;
};

export default DrawerButtonIcon;

const styles = StyleSheet.create({
  imageContainer: {
    margin: 0,
    padding: 0,
  },
});
