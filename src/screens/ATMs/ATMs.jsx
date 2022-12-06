import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const {widthWindow, heightWindow} = Dimensions.get('window');

const ATMs = () => {
  const [latitude, setLatitude] = useState(10);
  const [longitude, setLongitude] = useState(10);

  useEffect(() => {
    try {
      Geolocation.getCurrentPosition(position => {
        const coordinates = position.coords;
        setLatitude(coordinates.latitude);
        setLongitude(coordinates.longitude);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <View style={styles.mapContainer}>
      <View style={styles.header}>
        <Header map={true} />
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          title="You are here"
          description="Current Location"
          coordinate={{latitude: latitude, longitude: longitude}}></Marker>
      </MapView>
    </View>
  );
};

export default ATMs;

const styles = StyleSheet.create({
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: heightWindow,
    width: widthWindow,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 99999,
    marginTop: 16,
  },
});
