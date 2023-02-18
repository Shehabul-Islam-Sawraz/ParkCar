import { Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectSource } from '../slices/navSlice';

const Map = () => {
  const source = useSelector(selectSource);

  return (
    <MapView
        style = {tw`flex-1`}
        provider = {PROVIDER_GOOGLE}
        mapType = "standard"
        initialRegion={{
            latitude: source.location.lat,
            longitude: source.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
    />
  );
};

export default Map;