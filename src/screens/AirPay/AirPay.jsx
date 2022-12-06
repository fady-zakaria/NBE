import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import {DraxProvider, DraxView} from 'react-native-drax';
import {AirPayContainer, AirPayText} from './AirPay.styles';
import {useSelector} from 'react-redux';
import {ThemeIndicator} from '../../redux/features/UI_Theme/UI_ThemeSlice';
// import Cards from '../../components/Cards/Cards';
import {useNavigation} from '@react-navigation/native';
import {visa1, visa2} from '../../constants/imgs';
import {cardsData} from '../../fakers/dummyData';
import {TitleParagraph} from '../../constants/styles';
import NavButton from '../../components/CustomStackNavigation/NavButton';
import {Provider} from 'react-native-paper';
import ModelAlert from '../../components/ModalAlert/ModelAlert';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';

const DraggedItem = ({name, image}) => (
  <View style={{marginRight: 10}}>
    <DraxView
      // style={styles.visaContainer}
      draggingStyle={styles.dragging}
      dragReleasedStyle={styles.dragging}
      hoverDraggingStyle={styles.hoverDragging}
      dragPayload={name}
      longPressDelay={0}>
      <Image source={image} />
    </DraxView>
  </View>
);
const AirPay = () => {
  const renderItem = ({item}) => (
    <DraggedItem name={item.name} image={item.visa} />
  );
  const [chosenVisa, setChosenVisa] = useState('');
  const navigation = useNavigation();
  const isDarkMode = useSelector(ThemeIndicator);
  const {t, i18n} = useTranslation();
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => {
    if (chosenVisa === 'GreenVisa') {
      setVisible(false);
      setChosenVisa('');
      navigation.replace('Home');
    } else if (chosenVisa === 'RedVisa') {
      setVisible(false);
      setChosenVisa('');
    }
  };

  const payingHandler = () => {
    if (chosenVisa === 'GreenVisa') {
      setContent(true);
      showDialog();
    } else if (chosenVisa === 'RedVisa') {
      setContent(false);
      showDialog();
    }
  };
  // const buttontext = ;
  return (
    <Provider>
      <ScrollView>
        <AirPayContainer darkMode={isDarkMode}>
          <Header />
          <TitleParagraph
            style={{marginHorizontal: 25, marginTop: 30, marginBottom: 20}}
            darkMode={isDarkMode}>
            {t('Cards')}
          </TitleParagraph>
          <DraxProvider>
            <FlatList
              data={cardsData}
              horizontal={true}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={{
                paddingHorizontal: 25,
                paddingBottom: 50,
              }}
            />
            <DraxView
              style={styles.dragBoxContainer}
              receivingStyle={styles.receiving}
              renderContent={({viewState}) => {
                const receivingDrag = viewState && viewState.receivingDrag;
                const payload = receivingDrag && receivingDrag.payload;
                return (
                  <>
                    {chosenVisa ? (
                      chosenVisa === 'GreenVisa' ? (
                        <Image source={visa1} />
                      ) : (
                        <Image source={visa2} />
                      )
                    ) : (
                      <AirPayText darkMode={isDarkMode}>
                        {t('Touch & hold a card then drag it to this box')}
                      </AirPayText>
                    )}
                  </>
                );
              }}
              onReceiveDragDrop={event => {
                console.log('payload', event.dragged.payload);
                setChosenVisa(event.dragged.payload);
              }}
            />
          </DraxProvider>
          <View style={{marginHorizontal: 25}}>
            <NavButton btnName={t('Pay Now')} onPress={payingHandler} />
          </View>
        </AirPayContainer>
      </ScrollView>
      <ModelAlert visible={visible} content={content} hideDialog={hideDialog} />
    </Provider>
  );
};

export default AirPay;

const styles = StyleSheet.create({
  dragBoxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#007236',
    borderWidth: 2,
    borderRadius: 27,
    height: 220,
    marginHorizontal: 25,
    borderStyle: 'dashed',
    marginBottom: 70,
    marginTop: 25,
  },
  receiving: {
    borderColor: 'white',
    borderWidth: 2,
    orderStyle: 'dashed',
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 27,
  },
});
