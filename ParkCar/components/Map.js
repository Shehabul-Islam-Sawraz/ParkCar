import { Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectDestination, selectSource } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from "@env";

const Map = () => {
  const source = useSelector(selectSource);
  const destination = useSelector(selectDestination);

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
    >
      {/**?. says that source may be undefined, so its optional*/}
      {source && destination && (
        <MapViewDirections
          origin = {source.description}
          destination = {destination.description}
          apikey = {GOOGLE_MAPS_API_KEY}
          strokeWidth = {3}
          strokeColor = "black"
        />
      )}
      {source?.location && (
        <Marker
          coordinate = {{
            latitude: source.location.lat,
            longitude: source.location.lng,
          }}
          title = "Origin"
          description= {source.description}
          identifier = "source"
        />
      )}
    </MapView>
  );
};

export default Map;