import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {homeTabs} from '../../fakers/dummyData';
import {
  TabImgContainer,
  TabTextCont,
  TabText,
  TabContainer,
} from './homeTabs.styles';

const Item = ({name, image, color}) => (
  <TouchableOpacity>
    <TabContainer>
      <TabImgContainer style={{backgroundColor: color}}>
        <Image source={image} />
      </TabImgContainer>
      <TabTextCont>
        <TabText>{name}</TabText>
      </TabTextCont>
    </TabContainer>
  </TouchableOpacity>
);

const HomeTabs = () => {
  const renderItem = ({item}) => (
    <Item name={item.name} image={item.image} color={item.color} />
  );
  return (
    <View>
      <FlatList
        data={homeTabs}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{
          marginLeft: 22,
          display: 'flex',
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
