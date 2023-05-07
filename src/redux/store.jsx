import {configureStore} from '@reduxjs/toolkit';
import ThemeReducer from '../redux/features/UI_Theme/UI_ThemeSlice';
import signupReducer from '../redux/features/Signup/SignupSlice';
import authReducer from '../redux/features/auth/authSlice';
import ArabicReducer from '../redux/features/ArabicMode/ArabicModeSlice';
import BeneficiariesReducer from '../redux/features/Beneficiaries/BeneficiariesSlice';
import Reactotron from '../../ReactotronConfig';
// import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    arabic: ArabicReducer,
    signupinputs: signupReducer,
    auth: authReducer,
    Beneficiaries: BeneficiariesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  enhancers: [Reactotron.createEnhancer()],
  devTools: true,
});

export default store;