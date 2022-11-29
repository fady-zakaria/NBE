import {Image, StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import {darkMode} from '../../constants/imgs';
import {Row} from '../../constants/styles';
import {useSelector, useDispatch} from 'react-redux';
import {changeTheme} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';

const DarkModeButton = () => {
  const dispatch = useDispatch();
  //   const [isEnabled, setIsEnabled] = useState(false);
  const isDarkMode = useSelector(ThemeIndicator);
  const toggleSwitch = () => {
    // setIsEnabled(previousState => !previousState);
    dispatch(changeTheme());
  };

  return (
    <Row style={styles.darkBtnContainer}>
      <Row>
        <Image source={darkMode} />
        <Text style={styles.darkBtnText}>Dark Mode</Text>
      </Row>
      <View>
        <Switch
          trackColor={{false: '#FFFFFF', true: '#FFFFFF'}}
          thumbColor={isDarkMode ? '#007236' : '#B3B3B3'}
          ios_backgroundColor="#FFFFFF"
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </Row>
  );
};

export default DarkModeButton;

const styles = StyleSheet.create({
  darkBtnText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
    padding: 0,
    marginLeft: 10,
    color: '#1B1B1B',
  },
  darkBtnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 15,
  },
});
