import { Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <MapView
        style = {tw`flex-1`}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
    />
  );
};

export default Map;