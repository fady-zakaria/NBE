import {StyleSheet, Text, View, Image, I18nManager} from 'react-native';
import React, {useState} from 'react';
import {Dialog, Portal, Provider} from 'react-native-paper';
import {TitleText, DescText} from './ModelAlert.styles';
import NavButton from '../CustomStackNavigation/NavButton';
import {missionComplete} from '../../constants/imgs';
import {useTranslation} from 'react-i18next';

const CompleteModelAlert = ({visible, hideDialog, accountName}) => {
  const {t, i18n} = useTranslation();
  return (
    <Portal>
      <Dialog
        visible={visible}
        onDismiss={hideDialog}
        style={styles.DialogContainer}>
        <Dialog.Content style={styles.dialogContentStyle}>
          <Image source={missionComplete} />
          <TitleText>{t('Mission Complete')}</TitleText>
          {I18nManager.isRTL ? (
            <DescText
              style={{
                marginBottom: 0,
              }}>{`تمت اضافة ${accountName} بنجاح الى قائمة المستفيدين `}</DescText>
          ) : (
            <DescText style={{marginBottom: 0}}>
              {`${accountName} was successfuly added to your beneficiaries list.`}
            </DescText>
          )}
        </Dialog.Content>
        <Dialog.Actions>
          <NavButton
            dialog={'right'}
            btnName={t('Finish')}
            onPress={hideDialog}
            btnStyle={styles.btnStyle}
          />
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default CompleteModelAlert;

const styles = StyleSheet.create({
  DialogContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  btnStyle: {
    marginBottom: 0,
  },
  dialogContentStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
