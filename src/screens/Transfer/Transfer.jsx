import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  I18nManager,
  ScrollView,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  TransferContainer,
  TransferHeader,
  TransferBox,
  AmountInput,
  InputContainer,
} from './Transfer.styles';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {logo, logoGreen} from '../../constants/imgs';
import {TitleParagraph, SmallTitleParagraph} from '../../constants/styles';
import {Picker} from '@react-native-picker/picker';
import DrawerToggleIcon from '../../components/CustomDrawer/DrawerToggleIcon';
import {LanguageIndicator} from '../../redux/features/ArabicMode/ArabicModeSlice';
import NavButton from '../../components/CustomStackNavigation/NavButton';

const Transfer = () => {
  const isDarkMode = useSelector(ThemeIndicator);
  const isArabic = useSelector(LanguageIndicator);
  const [typeOfTransfer, setTypeOfTransfer] = useState();
  const [transferFrom, setTransferFrom] = useState();
  const [transferTo, setTransferTo] = useState();
  const [TransferAmount, setTransferAmount] = useState();

  const UserEmailHandler = Amount => {
    setTransferAmount(Amount);
  };

  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }
  return (
    <ScrollView>
      <TransferContainer darkMode={isDarkMode}>
        <TransferHeader>
          <DrawerToggleIcon />
          {isDarkMode ? <Image source={logo} /> : <Image source={logoGreen} />}
        </TransferHeader>
        <View style={{marginTop: '15%'}}>
          <TitleParagraph darkMode={isDarkMode}>Transfer</TitleParagraph>
          <TransferBox style={{elevation: 3}}>
            <View style={{paddingVertical: 11, paddingHorizontal: 16}}>
              <SmallTitleParagraph
                darkMode={isDarkMode}
                style={{marginHorizontal: 15}}>
                Type of transfer
              </SmallTitleParagraph>
              <Picker
                style={styles.picker}
                dropdownIconColor={'#1C2437'}
                dropdownIconRippleColor={'#1C2437'}
                prompt="Type of transfer"
                ref={pickerRef}
                selectedValue={typeOfTransfer}
                onValueChange={(itemValue, itemIndex) =>
                  setTypeOfTransfer(itemValue)
                }>
                <Picker.Item label="Between your accounts" value="accounts" />
                <Picker.Item label="Another account" value="AnotherAccount" />
              </Picker>
            </View>
          </TransferBox>
          <TransferBox style={{elevation: 3}}>
            <View style={{paddingVertical: 11, paddingHorizontal: 16}}>
              <SmallTitleParagraph
                darkMode={isDarkMode}
                style={{marginHorizontal: 15}}>
                Transfer from
              </SmallTitleParagraph>
              <Picker
                style={styles.picker}
                dropdownIconColor={'#1C2437'}
                dropdownIconRippleColor={'#1C2437'}
                prompt="Transfer from"
                ref={pickerRef}
                selectedValue={transferFrom}
                onValueChange={(itemValue, itemIndex) =>
                  setTransferFrom(itemValue)
                }>
                <Picker.Item
                  label="042-653214521245   -   $2,145,5874.25"
                  value="first value"
                />
                <Picker.Item
                  label="056-32154875423   -   $1,523.48"
                  value="second value"
                />
              </Picker>
            </View>
          </TransferBox>
          <TransferBox style={{elevation: 3}}>
            <View style={{paddingVertical: 11, paddingHorizontal: 16}}>
              <SmallTitleParagraph
                darkMode={isDarkMode}
                style={{marginHorizontal: 15}}>
                Transfer to
              </SmallTitleParagraph>
              <Picker
                style={styles.picker}
                dropdownIconColor={'#1C2437'}
                dropdownIconRippleColor={'#1C2437'}
                prompt="Transfer to"
                ref={pickerRef}
                selectedValue={transferTo}
                onValueChange={(itemValue, itemIndex) =>
                  setTransferTo(itemValue)
                }>
                <Picker.Item
                  label="042-653214521245   -   $2,145,5874.25"
                  value="first value"
                />
                <Picker.Item
                  label="056-32154875423   -   $1,523.48"
                  value="second value"
                />
              </Picker>
            </View>
          </TransferBox>
          <TransferBox style={{elevation: 3}}>
            <View style={{paddingVertical: 11, paddingHorizontal: 16}}>
              <SmallTitleParagraph
                darkMode={isDarkMode}
                style={{marginHorizontal: 15, color: '#007236'}}>
                Amount to transfer
              </SmallTitleParagraph>
              <InputContainer>
                <Text
                  style={{
                    textAlign: 'left',
                    display: 'flex',
                    alignSelf: 'center',
                    color: 'black',
                  }}>
                  $
                </Text>
                <AmountInput
                  arabic={isArabic}
                  darkMode={isDarkMode}
                  onChangeText={UserEmailHandler}
                  value={TransferAmount}
                  placeholder="6,580.00"
                  keyboardType="numeric"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="#DEDEDE"
                />
              </InputContainer>
            </View>
          </TransferBox>
          <TransferBox style={{elevation: 3}}>
            <InputContainer
              style={{paddingVertical: 11, paddingHorizontal: 16}}>
              <AmountInput
                arabic={isArabic}
                darkMode={isDarkMode}
                onChangeText={UserEmailHandler}
                value={TransferAmount}
                placeholder="Reason of transfer"
                autoCapitalize="sentences"
                placeholderTextColor="#DEDEDE"
              />
            </InputContainer>
          </TransferBox>
        </View>
        <View style={{marginTop: 200, marginBottom: '20%'}}>
          <NavButton btnName={'Transfer'} onPress={() => {}} />
        </View>
      </TransferContainer>
    </ScrollView>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  picker: {
    color: '#1C2437',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    margin: 0,
    padding: 0,
  },
});
