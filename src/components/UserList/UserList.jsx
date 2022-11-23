import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {
  UserListContainer,
  UserContainer,
  UserNameText,
} from './userList.styles';
import {Users} from '../../fakers/dummyData';
import HomeContentTitle from '../HomeContentTitle/HomeContentTitle';

const Item = ({name, image}) => (
  <TouchableOpacity>
    <UserContainer style={styles.UserContainerStyle}>
      <Image
        source={image}
        style={{
          width: 77,
          height: 55,
          padding: 0,
          marginBottom: 5,
        }}
      />
      <UserNameText>{name}</UserNameText>
    </UserContainer>
  </TouchableOpacity>
);

const UserList = () => {
  const renderItem = ({item}) => <Item name={item.name} image={item.image} />;
  return (
    <UserListContainer>
      <HomeContentTitle title="Send money" />
      <View>
        <FlatList
          data={Users}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          // contentContainerStyle={{
          //   marginLeft: 22,
          // }}
        />
      </View>
    </UserListContainer>
  );
};

export default UserList;

const styles = StyleSheet.create({
  UserContainerStyle: {
    elevation: 10,
  },
});
