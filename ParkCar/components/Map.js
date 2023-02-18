import { Text, View } from 'react-native';
import React, { useRef, useEffect } from 'react';
import tw from 'tailwind-react-native-classnames';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectDestination, selectSource } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from "@env";


const Map = () => {
  const source = useSelector(selectSource);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null); // Making a reference to map, so we can change its characteristics

  useEffect(() => {
      if(!source || !destination){ // If source or destination is not selected, then return
        return;
      }

      // Zoom & fit to markers
      // Here `source` & `destination` are the identifier we have initialized in this page below
      mapRef.current
          .fitToSuppliedMarkers(['source', 'destination'], {
            animated: true,  
            edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }, // This edgePadding will make a padding to the map markers, so that they don't show up on the screen edge
          });
      
  }, [source, destination])

  return (
    <MapView
        ref = {mapRef}
        style = {tw`flex-1`}
        provider = {PROVIDER_GOOGLE}
        mapType = "standard"
        initialRegion={{
            latitude: source.location.lat,
            longitude: source.location.lng,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
        }}
        
    >

      {source && destination && (
        <MapViewDirections
          origin = {source.description}
          destination = {destination.description}
          apikey = {GOOGLE_MAPS_API_KEY}
          strokeWidth = {3}
          strokeColor = "black"
        />
      )}

      {/**?. says that source may be undefined, so its optional*/}
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

      {destination?.location && (
        <Marker
          coordinate = {{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title = "Destination"
          description= {destination.description}
          identifier = "destination"
        />
      )}
    </MapView>
  );
};

export default Map;