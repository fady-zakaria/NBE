import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: state => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const {changeTheme} = ThemeSlice.actions;

export const ThemeIndicator = state => state.theme.darkMode;

export default ThemeSlice.reducer;
