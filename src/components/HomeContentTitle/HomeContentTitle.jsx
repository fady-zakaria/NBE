import {
  I18nManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {TitleParagraph, SmallParagraph} from '../../constants/styles';
import {HomeContentTitleContainer} from './HomeContentTitle.styles';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';

const HomeContentTitle = ({title, viewAll}) => {
  const isDarkMode = useSelector(ThemeIndicator);
  return (
    <HomeContentTitleContainer>
      <View>
        <TitleParagraph darkMode={isDarkMode}>{title}</TitleParagraph>
      </View>
      <TouchableOpacity>
        {I18nManager.isRTL ? (
          <SmallParagraph>{viewAll}</SmallParagraph>
        ) : (
          <SmallParagraph>View All</SmallParagraph>
        )}
      </TouchableOpacity>
    </HomeContentTitleContainer>
  );
};

export default HomeContentTitle;

const styles = StyleSheet.create({});
