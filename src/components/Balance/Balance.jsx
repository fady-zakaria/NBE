import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  BalanceContainer,
  Balancetitle,
  BalanceTitleWrap,
  TotalBalance,
  FingerPrintContainer,
} from './Balance.styles';
import {fingerprint} from '../../constants/imgs';
const Balance = () => {
  return (
    <BalanceContainer>
      <BalanceTitleWrap>
        <View>
          <Balancetitle>Balance</Balancetitle>
        </View>
        <FingerPrintContainer>
          <TouchableOpacity>
            <Image source={fingerprint} />
          </TouchableOpacity>
        </FingerPrintContainer>
      </BalanceTitleWrap>
      <View>
        <TotalBalance>$2,374,654.25</TotalBalance>
      </View>
    </BalanceContainer>
  );
};

export default Balance;

const styles = StyleSheet.create({});
