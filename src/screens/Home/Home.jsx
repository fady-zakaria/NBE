import React from 'react';
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

const Home = () => {
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
