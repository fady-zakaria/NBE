import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {hamburger, user, notification} from '../../constants/imgs';
import {useNavigation} from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();

  const OpenDrawerHandler = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.wrapper}>
        <View>
          <Pressable onPress={OpenDrawerHandler}>
            <Image style={styles.drawerIcon} source={hamburger} />
          </Pressable>
        </View>
        <View style={styles.modify}>
          <Image style={styles.userIcon} source={user} />
        </View>
        <View>
          <Text style={styles.morningText}>Good morning</Text>
          <Text style={styles.userName}>Ahmed</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.Notifybtn}>
        <Image source={notification} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'inherit',
    marginLeft: 26,
    marginRight: 24,
  },
  userIcon: {
    borderRadius: 10,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  modify: {
    marginHorizontal: 7,
  },
  morningText: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 16,
    fontWeight: '300',
  },
  userName: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    lineHeight: 16,
    fontWeight: '700',
  },
  Notifybtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 11,
  },
});
