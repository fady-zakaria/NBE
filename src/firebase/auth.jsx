import axios from 'axios';

export const createUser = async (email, password) => {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBS7RXIDQSutsdT-ly91XpXLnUQs6XT7VM',
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
  // console.log(response.data);
  const token = response.data.idToken;
  const localid = response.data.localId;
  const authdata = {
    token: token,
    localid: localid,
  };
  return authdata;
};

export const LogInUser = async (email, password) => {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBS7RXIDQSutsdT-ly91XpXLnUQs6XT7VM',
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
  // console.log(response.data);
  const token = response.data.idToken;
  const localid = response.data.localId;
  const authdata = {
    token: token,
    localid: localid,
  };
  return authdata;
};
