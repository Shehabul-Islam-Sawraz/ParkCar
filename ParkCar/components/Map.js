import { Text, View, Image } from 'react-native';
import React, { useRef, useEffect } from 'react';
import tw from 'tailwind-react-native-classnames';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectSource, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_APIKEY } from "@env";
import { styles } from '../css/MapScreen';

const Map = () => {
  const source = useSelector(selectSource);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null); // Making a reference to map, so we can change its characteristics
  const dispatch = useDispatch(); // Give access to data layer

  useEffect(() => {
      if(!source || !destination || !mapRef.current){ // If source or destination is not selected, then return
        return;
      }

      setTimeout(() => {
          if(source && destination && mapRef.current){ // If source or destination is not selected, then return
            mapRef?.current
            ?.fitToSuppliedMarkers(['source', 'destination'], {
              animated: true,  
              edgePadding: { top: 50, right: 50, bottom: 50, left: 50 }, // This edgePadding will make a padding to the map markers, so that they don't show up on the screen edge
            });
          }
      }, 1000); // Timeout is required for loading the map zoom & fit
      
  }, [source, destination, mapRef]);

  useEffect(() => {
      if(!source || !destination){ // If source or destination is not selected, then return
        return;
      }

      const getTravelTime = async () => {
          fetch(
              `https://maps.googleapis.com/maps/api/distancematrix/json?
              units=imperial&origins=${source.description}&destinations=${destination
              .description}&key=${GOOGLE_MAPS_APIKEY}`
          )
          .then((res) => res.json())
          .then((data) => {
              // console.log(data.rows[0].elements[0]);
              dispatch(setTravelTimeInformation(data.rows[0].elements[0])); // Conatins JSON information about travel distance time etc. fetched from distance matrix API
          });
      };

      getTravelTime();

  }, [source, destination]);

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
        >
          <Image
            resizeMode = "contain"
            style = {[styles.carMarker, {transform: [{
              rotate: `120deg`,
            }]}]}
            source = {require('../assets/images/top-Comfort.png')}
          />
        </Marker>
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