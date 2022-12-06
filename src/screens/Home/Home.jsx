import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  LogBox,
} from 'react-native';
import Balance from '../../components/Balance/Balance';
import Header from '../../components/Header/Header';
import History from '../../components/History/History';
import HomeTabs from '../../components/HomeTabs/HomeTabs';
import UserList from '../../components/UserList/UserList';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {UserAuth} from '../../redux/features/auth/authSlice';
import {UserInputs} from '../../redux/features/Signup/SignupSlice';
import {fetchuser} from '../../firebase/firebaseDatabase';
import {HomeContainer} from './Home.styles';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';

const Home = () => {
  const userAuth = useSelector(UserAuth);
  const dispatch = useDispatch();
  console.log('user Auth from Home***********************', userAuth);

  // console.log('route ****************************', route);
  // const userId = route.params;
  // console.log(userId);
  const newuserinputs = useSelector(UserInputs);
  console.log('from home Screen user Data', newuserinputs);

  const isDarkMode = useSelector(ThemeIndicator);
  // useEffect(() => {
  //   const getuser = async () => {
  //     const userData = fetchuser(userAuth.userId);
  //     dispatch(
  //       setUserData({
  //         firstName: userData.firstName,
  //         lastName: userData.lastName,
  //         email: userData.email,
  //         mobileNumber: userData.mobileNumber,
  //       }),
  //     );
  //   };
  //   if (userAuth.userId) {
  //     getuser();
  //   }
  // }, []);

  return (
    <ScrollView>
      <HomeContainer darkMode={isDarkMode}>
        <Header />
        <Balance />
        <HomeTabs />
        <UserList />
        <History />
      </HomeContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // HomeContainer: {
  //   backgroundColor: '#F1F3FB',
  //   flex: 1,
  //   marginTop: 16,
  // },
});

export default Home;
