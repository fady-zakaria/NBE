import {createSlice} from '@reduxjs/toolkit';
import {getBeneficiaries} from '../../../firebase/firebaseDatabase';

const initialState = {
  //   id: '',
  //   firstName: '',
  //   lastName: '',
  //   arabicName: '',
  //   email: '',
  //   phoneNumber: '',
  //   image: '',
  //   bankBranch: '',
  //   accountNumber: '',
  //   balance: '',
  //   TransactionsHistory: [],
  accounts: [],
};

export const BeneficiariesSlice = createSlice({
  name: 'Beneficiaries',
  initialState,
  reducers: {
    setAccountsData: (state, action) => {
      //   state.id = action.payload.id;
      //   state.firstName = action.payload.firstName;
      //   state.lastName = action.payload.lastName;
      //   state.arabicName = action.payload.arabicName;
      //   state.email = action.payload.email;
      //   state.phoneNumber = action.payload.phoneNumber;
      //   state.image = action.payload.image;
      //   state.bankBranch = action.payload.bankBranch;
      //   state.accountNumber = action.payload.accountNumber;
      //   state.balance = action.payload.balance;
      //   state.TransactionsHistory = action.payload.TransactionsHistory;
      state.accounts = action.payload.accounts;
    },
  },
});

export const getAccountsData = () => {
  return async dispatch => {
    const getAccounts = async () => {
      const Accounts = await getBeneficiaries();
      return Accounts;
    };
    try {
      const Accounts = await getAccounts();
      //   console.log('Accounts from stack page*********', Accounts);
      dispatch(
        setAccountsData({
          accounts: Accounts,
        }),
      );
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const {setAccountsData} = BeneficiariesSlice.actions;

export const BeneficiariesData = state => state.Beneficiaries;

export default BeneficiariesSlice.reducer;
