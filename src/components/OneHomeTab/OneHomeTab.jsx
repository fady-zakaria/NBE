import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {useSelector} from 'react-redux';
import {
  TabContainer,
  TabImgContainer,
  TabTextCont,
  TabText,
} from './OneHomeTab.styles';
const OneHomeTab = ({image, name, color, style}) => {
  const isDarkMode = useSelector(ThemeIndicator);
  return (
    <TouchableOpacity style={style}>
      <TabContainer>
        <TabImgContainer style={{backgroundColor: color}}>
          <Image source={image} />
        </TabImgContainer>
        <TabTextCont>
          <TabText darkMode={isDarkMode}>{name}</TabText>
        </TabTextCont>
      </TabContainer>
    </TouchableOpacity>
  );
};

export default OneHomeTab;

const styles = StyleSheet.create({});
