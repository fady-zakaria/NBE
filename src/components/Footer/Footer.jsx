import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  FooterContainer,
  FooterBtns,
  FooterBtnText,
  FooterText,
} from './Footer.styles';

const Footer = () => {
  return (
    <View>
      <FooterContainer>
        <FooterBtns>
          <Pressable android_ripple={{color: '#ccc'}}>
            <FooterBtnText>Contact Us</FooterBtnText>
          </Pressable>
          <FooterBtnText style={{color: '#fff'}}> - </FooterBtnText>
          <Pressable android_ripple={{color: '#ccc'}}>
            <FooterBtnText>FAQs</FooterBtnText>
          </Pressable>
          <FooterBtnText style={{color: '#fff'}}> - </FooterBtnText>
          <Pressable android_ripple={{color: '#ccc'}}>
            <FooterBtnText>Help</FooterBtnText>
          </Pressable>
        </FooterBtns>
        <View style={{marginTop: 5, marginBottom: 11}}>
          <FooterText>
            Copyright © NBE 2021 All Rights Reserved - National Bank of Egypt
          </FooterText>
        </View>
      </FooterContainer>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
