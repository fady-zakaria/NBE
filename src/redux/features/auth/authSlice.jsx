import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  token: '',
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      //   console.log(action.payload);
      state.token = action.payload;
      state.isAuthenticated = true;
    },

    removeAuthToken: state => {
      state.token = '';
      state.isAuthenticated = false;
      AsyncStorage.removeItem('token');
    },
  },
});

export const {setAuthToken, removeAuthToken} = authSlice.actions;

export const UserAuth = state => state.auth;

export default authSlice.reducer;
