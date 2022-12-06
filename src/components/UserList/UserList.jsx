import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  I18nManager,
} from 'react-native';
import React from 'react';
import {
  UserListContainer,
  UserContainer,
  UserNameText,
} from './userList.styles';
import {Users} from '../../fakers/dummyData';
import HomeContentTitle from '../HomeContentTitle/HomeContentTitle';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';
import {LanguageIndicator} from '../../redux/features/ArabicMode/ArabicModeSlice';

const Item = ({name, image, arabicName}) => (
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
      {I18nManager.isRTL ? (
        <UserNameText>{arabicName}</UserNameText>
      ) : (
        <UserNameText>{name}</UserNameText>
      )}
    </UserContainer>
  </TouchableOpacity>
);

const UserList = () => {
  const {t, i18n} = useTranslation();
  const renderItem = ({item}) => (
    <Item name={item.name} image={item.image} arabicName={item.arabicName} />
  );
  return (
    <UserListContainer>
      <HomeContentTitle title={t('Send money')} viewAll={t('all users')} />
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
