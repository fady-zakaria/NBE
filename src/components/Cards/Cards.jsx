import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import {CardsData} from '../../fakers/dummyData';
import {TitleParagraph} from '../../constants/styles';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
import {DraxProvider, DraxView} from 'react-native-drax';

const Item = ({name, image}) => (
  <View style={{marginRight: 10}}>
    <Image source={image} />
  </View>
);
const DraggedItem = ({name, image}) => (
  <>
    <DraxView
      style={styles.visaContainer}
      draggingStyle={styles.dragging}
      dragReleasedStyle={styles.dragging}
      hoverDraggingStyle={styles.hoverDragging}
      dragPayload={name}
      longPressDelay={0}>
      <Image source={image} />
    </DraxView>
    <Image source={image} />
  </>
);

const Cards = ({darg}) => {
  const renderItem = ({item}) => {
    <DraggedItem name={item.name} image={item.visa} />;
    // if (darg) {
    //   return <DraggedItem name={item.name} image={item.visa} />;
    // } else {
    //   return <Item name={item.name} image={item.visa} />;
    // }
  };

  const isDarkMode = useSelector(ThemeIndicator);
  return (
    <View style={styles.CardsContainer}>
      <TitleParagraph darkMode={isDarkMode}>Cards</TitleParagraph>
      <FlatList
        data={CardsData}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          marginTop: 14,
          paddingBottom: 25,
        }}
      />
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  CardsContainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  visaContainer: {
    marginRight: 10,
  },
});
