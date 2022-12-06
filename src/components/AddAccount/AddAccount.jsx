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
import {AddbtnText, ArabicAddbtnText} from './AddAccount.styles';
import {storeBeneficiaries} from '../../firebase/firebaseDatabase';

const AddAccount = ({bgColor}) => {
  const addbtnHandler = () => {
    const account = {
      firstName: 'Dona',
      lastName: 'White',
      arabicName: '',
      email: 'donaW@gmail.com',
      phoneNumber: '+20 123 456 7890',
      image:
        'https://firebasestorage.googleapis.com/v0/b/nbe-react-native.appspot.com/o/AccountsImages%2Fuser7.png?alt=media&token=e6eaa520-f1ae-4be7-82b1-e62c90a2e8c6',
      bankBranch: '043 - Water Way Mall',
      accountNumber: 'EG150003004250008857447010180',
      balance: '$84,553.20',
      TransactionsHistory: [
        {
          TransactionsId: 0,
          name: 'Birthday gift for ross and rachel',
          date: '28-12-2020',
          amount: '$538,96.0',
        },
      ],
    };

    console.log(account);
    storeBeneficiaries(account);
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

export default AddAccount;

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
