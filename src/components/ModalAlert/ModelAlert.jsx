import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {Dialog, Portal, Provider} from 'react-native-paper';
import {TitleText, DescText, MoneyText} from './ModelAlert.styles';
import CancelBtn from '../CancelBtn/CancelBtn';
import NavButton from '../CustomStackNavigation/NavButton';
import {wrongdialog, rightdialog} from '../../constants/imgs';
import {useTranslation} from 'react-i18next';
import i18n from '../../constants/ArabicLanguage/index';

const ModelAlert = ({visible, content, hideDialog}) => {
  const {t, i18n} = useTranslation();
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={hideDialog}
        style={styles.DialogContainer}>
        <Dialog.Content>
          {content === true ? (
            <>
              <Image source={rightdialog} />
              <TitleText>{t('Mission Complete')}</TitleText>
              <DescText>{t('Your payment to IKEA was successful')}</DescText>
              <MoneyText>$5,542.00</MoneyText>
            </>
          ) : (
            <>
              <Image source={wrongdialog} />
              <TitleText style={{color: '#EB001B'}}>{t('Ooops...')}</TitleText>
              <DescText>{t('Your payment didn’t go through')}</DescText>
              <MoneyText>$5,542.00</MoneyText>
            </>
          )}
        </Dialog.Content>
        <Dialog.Actions>
          {content === true ? (
            <View
              style={{
                paddingHorizontal: 50,
                width: 250,
                marginHorizontal: 200,
              }}>
              <NavButton
                dialog={'right'}
                btnName={t('Done')}
                onPress={hideDialog}
              />
            </View>
          ) : (
            <>
              <CancelBtn
                dialog={true}
                btnName={t('Cancel')}
                onPress={hideDialog}
              />
              <NavButton
                dialog={'wrong'}
                btnName={t('Try Again')}
                onPress={hideDialog}
              />
            </>
          )}
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default ModelAlert;

const styles = StyleSheet.create({
  DialogContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
