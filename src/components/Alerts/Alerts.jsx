import {Alert} from 'react-native';

export const createAlert = (title, desc = '') => {
  Alert.alert(title, desc, [
    //   {
    //     text: "Cancel",
    //     onPress: () => console.log("Cancel Pressed"),
    //     style: "cancel"
    //   },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};
