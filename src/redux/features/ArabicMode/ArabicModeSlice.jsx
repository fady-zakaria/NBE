import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import i18n from '../../../constants/ArabicLanguage/index';

const initialState = {
  arabicLang: false,
};

export const ArabicModeSlice = createSlice({
  name: 'arabic',
  initialState,
  reducers: {
    langChange: (state, action) => {
      // console.log('action payload************************', action.payload);
      if (action.payload === 'true') {
        state.arabicLang = true;
      } else if (action.payload === 'false') {
        state.arabicLang = false;
      }
    },
  },
});

export const getLang = () => {
  return async dispatch => {
    try {
      const isArabic = await AsyncStorage.getItem('arabicMode');
      // console.log(
      //   'from Async Storage page arabicLang***********************',
      //   isArabic,
      // );
      if (isArabic === 'true') {
        i18n.changeLanguage('ar');
      } else if (isArabic === 'false') {
        i18n.changeLanguage('en');
      }

      dispatch(langChange(isArabic));
      // console.log(typeof isArabic);
      // if (isArabic !== null) {
      // }
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const {langChange} = ArabicModeSlice.actions;

export const LanguageIndicator = state => state.arabic.arabicLang;

export default ArabicModeSlice.reducer;
