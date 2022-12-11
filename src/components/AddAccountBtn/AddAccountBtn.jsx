import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  I18nManager,
} from 'react-native';
import React from 'react';
import {addIcon, addIconWhite} from '../../constants/imgs';
import {AddbtnText, ArabicAddbtnText} from './AddAccountBtn.styles';
import {storeBeneficiaries} from '../../firebase/firebaseDatabase';
import {useNavigation} from '@react-navigation/native';

const AddAccountBtn = ({bgColor}) => {
  const navigation = useNavigation();
  const addbtnHandler = () => {
    navigation.navigate('AddAccount');
  };
  return (
    <TouchableOpacity
      style={[
        styles.addbtn,
        bgColor === 'green' ? styles.greenbg : styles.whitebg,
      ]}
      onPress={addbtnHandler}>
      {bgColor === 'green' ? (
        I18nManager.isRTL ? (
          <>
            <Image source={addIconWhite} />
            <ArabicAddbtnText style={{color: '#ffffff'}}>
              اضافة مستفيد
            </ArabicAddbtnText>
          </>
        ) : (
          <>
            <Image source={addIconWhite} />
            <AddbtnText style={{color: '#ffffff'}}>Add</AddbtnText>
          </>
        )
      ) : I18nManager.isRTL ? (
        <>
          <Image source={addIcon} />
          <ArabicAddbtnText style={{color: '#007236'}}>اضافة</ArabicAddbtnText>
        </>
      ) : (
        <>
          <Image source={addIcon} />
          <AddbtnText style={{color: '#007236'}}>Add</AddbtnText>
        </>
      )}
    </TouchableOpacity>
  );
};

export default AddAccountBtn;

const styles = StyleSheet.create({
  addbtn: {
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
  },
  greenbg: {
    backgroundColor: '#007236',
  },
  whitebg: {
    backgroundColor: '#ffffff',
  },
});
