import axios from 'axios';

const BACKEND_URL = 'https://nbe-react-native-default-rtdb.firebaseio.com/';

// const storingData = Data => {
//   axios.post(BACKEND_URL);
// };

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase, ref, set, child, get, onValue} from 'firebase/database';
// import {useDispatch} from 'react-redux';
import {getStorage} from 'firebase/storage';
import {setuserData} from '../redux/features/Signup/SignupSlice';

// const dispatch = useDispatch();

const firebaseConfig = {
  apiKey: 'AIzaSyBS7RXIDQSutsdT-ly91XpXLnUQs6XT7VM',
  authDomain: 'nbe-react-native.firebaseapp.com',
  databaseURL: 'https://nbe-react-native-default-rtdb.firebaseio.com',
  projectId: 'nbe-react-native',
  storageBucket: 'nbe-react-native.appspot.com',
  messagingSenderId: '420198287034',
  appId: '1:420198287034:web:6a9dd2e9f26447d9266483',
  databaseURL: 'https://nbe-react-native-default-rtdb.firebaseio.com',
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(firebaseapp);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(firebaseapp);

export const StoreUserData = (
  userId,
  firstname,
  lastname,
  email,
  mobileNumber,
) => {
  //   const userId = auth.currentUser.uid;
  set(ref(db, 'users/' + userId), {
    firstname: firstname,
    lastname: lastname,
    email: email,
    mobileNumber: mobileNumber,
  });
};

export const fetchuser = async userId => {
  const response = await axios.get(BACKEND_URL + `/users/${userId}.json`);

  // console.log('response.data from firebase', response.data);
  const userData = {
    id: userId,
    email: response.data.email,
    firstName: response.data.firstname,
    lastName: response.data.lastname,
    mobileNumber: response.data.mobileNumber,
  };
  console.log('userData from firebase', userData);
  //   for (const key in response.data) {
  //     const expenseObj = {
  //       id: key,
  //       amount: response.data[key].amount,
  //       date: new Date(response.data[key].date),
  //       description: response.data[key].description,
  //     };
  //     expenses.push(expenseObj);
  //   }

  return userData;
};

export const storeBeneficiaries = Account => {
  axios.post(BACKEND_URL + `/Beneficiaries.json`, Account);
};

export const getBeneficiaries = async () => {
  const response = await axios.get(BACKEND_URL + '/Beneficiaries.json');
  // console.log('response date from firebase', response.data);
  const Accounts = [];

  for (const key in response.data) {
    const account = {
      id: key,
      firstName: response.data[key].firstName,
      lastName: response.data[key].lastName,
      arabicName: response.data[key].arabicName,
      email: response.data[key].email,
      phoneNumber: response.data[key].phoneNumber,
      image: response.data[key].image,
      bankBranch: response.data[key].bankBranch,
      accountNumber: response.data[key].accountNumber,
      balance: response.data[key].balance,
      TransactionsHistory: response.data[key].TransactionsHistory,
    };
    Accounts.push(account);
  }
  // console.log('Accounts from firebase', Accounts);
  return Accounts;
};

const storage = getStorage(firebaseapp);

export const uploadImage = async uri => {
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  const storageRef = ref(storage, `/images/${filename}`);
};

// export const getUserData = userId => {
//   //   const dbRef = ref(db);
//   const userData = '';
//   const usersRef = ref(db, 'users/' + userId);
//   onValue(usersRef, snapshot => {
//     const data = snapshot.val();

//     // dispatch(
//     //   setuserData({
//     //     firstName: data.firstname,
//     //     lastName: data.lastname,
//     //     email: data.email,
//     //     mobileNumber: data.mobileNumber,
//     //   }),
//     // );
//   });
//   //   get(child(dbRef, `users/${userId}`))
//   //     .then(snapshot => {
//   //       if (snapshot.exists()) {
//   //         userData = snapshot.val();
//   //         console.log('from firebase', userData);
//   //         console.lgo
//   //         dispatch(
//   //           setuserData({
//   //             firstName: userData.firstname,
//   //             lastName: userData.lastname,
//   //             email: userData.email,
//   //             mobileNumber: userData.mobileNumber,
//   //           }),
//   //         );
//   //       } else {
//   //         console.log('No data available');
//   //       }
//   //     })
//   //     .catch(error => {
//   //       console.error(error);
//   //     });
//   //   return data;
// };
