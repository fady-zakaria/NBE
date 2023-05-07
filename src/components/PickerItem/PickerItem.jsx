import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {SmallTitleParagraph} from '../../constants/styles';
import {Picker} from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {PickerBox} from './PickerItem.styles';
import {colors} from '../../utils/colors';

const PickerItem = ({label, pickerItems, setFieldValue}) => {
  const isDarkMode = useSelector(ThemeIndicator);
  const [pickerItemValue, setPickerItemValue] = useState();
  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }
  return (
    <>
      <PickerBox style={{elevation: 3}}>
        <View
          style={{
            paddingTop: 11,
            paddingLeft: 16,
            paddingRight: 14,
          }}>
          <SmallTitleParagraph
            darkMode={isDarkMode}
            style={{marginHorizontal: 15}}>
            {label}
          </SmallTitleParagraph>
          <Picker
            style={styles.picker}
            dropdownIconColor={colors.Light_Primary}
            dropdownIconRippleColor={colors.Light_Primary}
            // prompt={label}
            ref={pickerRef}
            selectedValue={pickerItemValue}
            onValueChange={(itemValue, itemPosition) => {
              setPickerItemValue(itemValue);
              setFieldValue('bankBranch', itemValue);
            }}>
            {pickerItems.map(
              item =>
                item.id === 0 ? (
                  <Picker.Item
                    label={item.label}
                    key={item.id}
                    enabled={false}
                  />
                ) : (
                  <Picker.Item
                    label={item.label}
                    value={item.value}
                    key={item.id}
                  />
                ),
              // <Picker.Item
              //   label={item.label}
              //   value={item.value}
              //   key={item.id}
              //   enabled={}
              // />
            )}
            {/* <Picker.Item label="Between your accounts" value="accounts" />
            <Picker.Item label="Another account" value="AnotherAccount" /> */}
          </Picker>
        </View>
      </PickerBox>
    </>
  );
};

export default PickerItem;

const styles = StyleSheet.create({
  picker: {
    color: '#1C2437',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    margin: 0,
    padding: 0,
    // display: 'flex',
    // justifyContent: 'flex-start',

    // // textAlign: 'left',

    // alignItems: 'flex-start',
    // alignContent: 'flex-end',
    // justifyContent: 'space-between',
    // width: '100%',
  },
});
