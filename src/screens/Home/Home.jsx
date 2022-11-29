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
} from 'react-native';
import Balance from '../../components/Balance/Balance';
import Header from '../../components/Header/Header';
import History from '../../components/History/History';
import HomeTabs from '../../components/HomeTabs/HomeTabs';
import UserList from '../../components/UserList/UserList';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {UserAuth} from '../../redux/features/auth/authSlice';
import {UserInputs} from '../../redux/features/Signup/SignupSlice';
import {fetchuser} from '../../firebase/firebaseDatabase';

const Home = () => {
  const userAuth = useSelector(UserAuth);
  console.log('user Auth from Home', userAuth);
  const route = useRoute();
  // const newuserinputs = useSelector(UserInputs);
  // console.log('from home Screen user Data', newuserinputs);

  // useEffect(() => {
  //   const userId = route.params.userId;
  //   const getuser = async () => {
  //     fetchuser(userId);
  //   };
  //   // StoreUserData(
  //   //   newuserinputs.firstName,
  //   //   newuserinputs.lastName,
  //   //   newuserinputs.email,
  //   //   newuserinputs.mobileNumber,
  //   // );
  //   if (userId) {
  //     getuser();
  //   }
  // }, []);
  return (
    <ScrollView>
      <View style={styles.HomeContainer}>
        <Header />
        <Balance />
        <HomeTabs />
        <UserList />
        <History />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    backgroundColor: '#F1F3FB',
    flex: 1,
    marginTop: 16,
  },
});

export default Home;
