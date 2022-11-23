import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {
  homeIconUnfocus,
  homeIconfocus,
  airpayIconUnfocus,
  airpayIconfocus,
  atmIconUnfocus,
  atmIconfocus,
  benfIconUnfocus,
  benfIconfocus,
  transferIconUnfocus,
  transferIconfocus,
} from '../../constants/imgs';

const TabBarButtonIcon = ({routeName, isfocused}) => {
  const [ImageSource, setImageSource] = useState();
  //   console.log('route name', routeName);
  useLayoutEffect(() => {
    if (routeName === 'Home') {
      isfocused
        ? setImageSource(homeIconfocus)
        : setImageSource(homeIconUnfocus);
    } else if (routeName === 'Transfer') {
      isfocused
        ? setImageSource(transferIconfocus)
        : setImageSource(transferIconUnfocus);
    } else if (routeName === 'Beneficiaries') {
      isfocused
        ? setImageSource(benfIconfocus)
        : setImageSource(benfIconUnfocus);
    } else if (routeName === 'ATMs') {
      isfocused ? setImageSource(atmIconfocus) : setImageSource(atmIconUnfocus);
    } else if (routeName === 'Air Pay') {
      isfocused
        ? setImageSource(airpayIconfocus)
        : setImageSource(airpayIconUnfocus);
    }
  }, [routeName, isfocused]);

  return (
    <>
      <Image source={ImageSource} />
    </>
  );
};

export default TabBarButtonIcon;

const styles = StyleSheet.create({});
