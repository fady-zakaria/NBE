import axios from 'axios';

const BACKEND_URL = 'https://nbe-react-native-default-rtdb.firebaseio.com/';

// const storingData = Data => {
//   axios.post(BACKEND_URL);
// };

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase, ref, set, child, get, onValue} from 'firebase/database';
// import {useDispatch} from 'react-redux';
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

export async function fetchuser(userId) {
  const response = await axios.get(BACKEND_URL + `/users/${userId}.json`);

  const userData = {};
  console.log('response.data from firebase', response.data);
  //   for (const key in response.data) {
  //     const expenseObj = {
  //       id: key,
  //       amount: response.data[key].amount,
  //       date: new Date(response.data[key].date),
  //       description: response.data[key].description,
  //     };
  //     expenses.push(expenseObj);
  //   }

  //   return expenses;
}

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
