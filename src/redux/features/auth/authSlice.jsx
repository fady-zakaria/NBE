import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  token: '',
  userId: '',
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuth: (state, action) => {
      //   console.log(action.payload);
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
    },

    removeAuthToken: state => {
      state.token = '';
      state.userId = '';
      state.isAuthenticated = false;
      AsyncStorage.removeItem('token');
    },
  },
});

export const {setUserAuth, removeAuthToken} = authSlice.actions;

export const UserAuth = state => state.auth;

export default authSlice.reducer;
