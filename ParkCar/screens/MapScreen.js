import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '../css/MapScreen';
import Map from '../components/Map';

const MapScreen = () => {
  return (
    <View>
      <View style = {styles.mapScreenView}>
        <Map/>
      </View>
      <View style = {styles.mapScreenView}>

      </View>
    </View>
  );
};

export default MapScreen;