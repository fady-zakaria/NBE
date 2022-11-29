import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber: '',
  password: '',
};

export const SignUpSlice = createSlice({
  name: 'signupinputs',
  initialState,
  reducers: {
    setFirstInputs: (state, action) => {
      console.log(action.payload);
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      // state.userName = Number(state.userName);
    },
    setMobile: (state, action) => {
      state.mobileNumber = action.payload.mobileNumber;
    },
    setPassword: (state, action) => {
      state.password = action.payload.password;
    },
    removeInputs: state => {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.mobileNumber = '';
      state.password = '';
    },
    setUserData: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.mobileNumber = action.payload.mobileNumber;
    },
  },
});

export const {
  setFirstInputs,
  removeInputs,
  setMobile,
  setPassword,
  setuserData,
} = SignUpSlice.actions;

export const UserInputs = state => state.signupinputs;

export default SignUpSlice.reducer;
