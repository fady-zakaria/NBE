import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MobileFooter = () => {
  return (
    <View style={styles.MobileFooterContainer}>
      <Text style={styles.FooterText}>
        By signing up, you agree to our{' '}
        <Text style={{fontWeight: 'bold', color: '#000'}}>
          {' '}
          Terms of Service
        </Text>{' '}
        and acknowledge that you have read our{' '}
        <Text style={{fontWeight: 'bold', color: '#000'}}> Privacy Policy</Text>
        .
      </Text>
    </View>
  );
};

export default MobileFooter;

const styles = StyleSheet.create({
  MobileFooterContainer: {
    marginLeft: 5,
    marginBottom: 25,
  },
  FooterText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: '#808080',
  },
});
