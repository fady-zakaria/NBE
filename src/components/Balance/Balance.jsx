import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {
  BalanceContainer,
  Balancetitle,
  BalanceTitleWrap,
  TotalBalance,
  FingerPrintContainer,
} from './Balance.styles';
import {fingerprint, Balancebg} from '../../constants/imgs';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage';
import {LanguageIndicator} from '../../redux/features/ArabicMode/ArabicModeSlice';
const Balance = () => {
  const {t, i18n} = useTranslation();
  const [balance, setBalance] = useState(false);
  return (
    <BalanceContainer>
      <ImageBackground source={Balancebg} style={{overflow: 'hidden'}}>
        <BalanceTitleWrap>
          <View>
            <Balancetitle>{t('Balance')}</Balancetitle>
          </View>
          <FingerPrintContainer>
            <TouchableOpacity>
              <Image source={fingerprint} />
            </TouchableOpacity>
          </FingerPrintContainer>
        </BalanceTitleWrap>
        <View>
          <TouchableOpacity onPress={() => setBalance(true)}>
            {balance ? (
              <TotalBalance>$2,374,654.25</TotalBalance>
            ) : (
              <TotalBalance>{t('Press here to show balance')}</TotalBalance>
            )}
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </BalanceContainer>
  );
};

export default Balance;

const styles = StyleSheet.create({});
