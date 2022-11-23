import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Arabicbtn, ArabicbtnText} from './ArabicBtn.styles';
import React from 'react';

const ArabicBtn = () => {
  return (
    <>
      <TouchableOpacity>
        <Arabicbtn>
          <View>
            <ArabicbtnText>AR</ArabicbtnText>
          </View>
        </Arabicbtn>
      </TouchableOpacity>
    </>
  );
};

export default ArabicBtn;

const styles = StyleSheet.create({});
