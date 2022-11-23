import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TitleParagraph, SmallParagraph} from '../../constants/styles';
import {HomeContentTitleContainer} from './HomeContentTitle.styles';

const HomeContentTitle = ({title}) => {
  return (
    <HomeContentTitleContainer>
      <View>
        <TitleParagraph>{title}</TitleParagraph>
      </View>
      <TouchableOpacity>
        <SmallParagraph>View All</SmallParagraph>
      </TouchableOpacity>
    </HomeContentTitleContainer>
  );
};

export default HomeContentTitle;

const styles = StyleSheet.create({});
