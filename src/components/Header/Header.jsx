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
import {user, notification} from '../../constants/imgs';

import {UserInputs} from '../../redux/features/Signup/SignupSlice';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';
import {MorningText, UserName} from './Header.styles';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import DrawerToggleIcon from '../CustomDrawer/DrawerToggleIcon';
import {useState} from 'react';
import {useLayoutEffect} from 'react';

const Header = ({map}) => {
  const {t, i18n} = useTranslation();
  const [darkmodeFlag, setdarkmodeFlag] = useState(false);
  const isDarkMode = useSelector(ThemeIndicator);

  const headerMode = () => {
    if (map) {
      setdarkmodeFlag(false);
    } else {
      setdarkmodeFlag(isDarkMode);
    }
  };

  useLayoutEffect(() => {
    headerMode();
  }, [isDarkMode, map]);

  const userData = useSelector(UserInputs);
  // console.log('from home Screen user Data', newuserinputs);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.wrapper}>
        {map ? <DrawerToggleIcon map={true} /> : <DrawerToggleIcon />}

        <View style={styles.modify}>
          <Image style={styles.userIcon} source={user} />
        </View>
        <View>
          <MorningText darkMode={darkmodeFlag}>{t('Good morning')}</MorningText>
          <UserName darkMode={darkmodeFlag}>{userData.firstName}</UserName>
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
  // morningText: {
  //   color: 'black',
  //   fontFamily: 'Roboto',
  //   fontSize: 14,
  //   fontStyle: 'normal',
  //   lineHeight: 16,
  //   fontWeight: '300',
  // },
  // userName: {
  //   color: 'black',
  //   fontFamily: 'Roboto',
  //   fontSize: 14,
  //   fontStyle: 'normal',
  //   lineHeight: 16,
  //   fontWeight: '700',
  //   textTransform: 'capitalize',
  // },
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
