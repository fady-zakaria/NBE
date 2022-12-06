import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import {Arabicbtn, ArabicbtnText} from './ArabicBtn.styles';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';
import {useDispatch, useSelector} from 'react-redux';
import {langChange} from '../../redux/features/ArabicMode/ArabicModeSlice';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LanguageIndicator} from '../../redux/features/ArabicMode/ArabicModeSlice';

const ArabicBtn = () => {
  const {t, i18n} = useTranslation();
  const [arabicLang, setArabicLang] = useState(false);
  const dispatch = useDispatch();
  const isArabicLang = useSelector(LanguageIndicator);
  console.log('from arabic btn isArabicLang ....... ', isArabicLang);

  const LanguageHandler = () => {
    if (I18nManager.isRTL) {
      // i18n.changeLanguage('en');
      setArabicLang(false);
      I18nManager.forceRTL(false);
      AsyncStorage.setItem('arabicMode', 'false');
      // dispatch(langChange());
      RNRestart.Restart();
    } else {
      // i18n.changeLanguage('ar');
      setArabicLang(true);
      AsyncStorage.setItem('arabicMode', 'true');
      I18nManager.forceRTL(true);
      // dispatch(langChange());
      RNRestart.Restart();
    }
    //   if(!I18nManager.isRTL){
    //     I18nManager.forceRTL(true);
    //     RNRestart.Restart();
    //  }
  };
  return (
    <>
      <TouchableOpacity onPress={LanguageHandler}>
        <Arabicbtn>
          {I18nManager.isRTL ? (
            <ArabicbtnText>EN</ArabicbtnText>
          ) : (
            <ArabicbtnText>AR</ArabicbtnText>
          )}
        </Arabicbtn>
      </TouchableOpacity>
    </>
  );
};

export default ArabicBtn;

const styles = StyleSheet.create({});
