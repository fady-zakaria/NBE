import {configureStore} from '@reduxjs/toolkit';
import ThemeReducer from '../redux/features/UI_Theme/UI_ThemeSlice';
import signupReducer from '../redux/features/Signup/SignupSlice';
import authReducer from '../redux/features/auth/authSlice';

export const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    signupinputs: signupReducer,
    auth: authReducer,
  },
});
