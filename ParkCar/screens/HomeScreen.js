import { Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { styles } from '../css/HomeScreen';
import Navigator from '../components/Navigator';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setSource } from '../slices/navSlice';

const HomeScreen = ({navigation}) => {
  // We need dispatch to push data to the data layer
  const dispatch = useDispatch();
  return (
    <SafeAreaView style = {styles.homeSafeAreaView}>
      <View style = {styles.logoContainer}>
        <Image
            resizeMode = "contain"
            style = {styles.logo}
            source={require('../assets/images/logo.png')}
        />

        <GooglePlacesAutocomplete
          nearbyPlacesAPI = 'GooglePlacesSearch'
          styles = {styles.whereFromContainer}
          debounce = {400} // If we stop typing for 400ms, it will execute a search
          placeholder = "Where From?"
          listViewDisplayed = "auto"
          query = {{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          minLength = {2}
          returnKeyType = {"search"}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            //console.log(data, details);

            // Setting the selected location as source
            dispatch(setSource({
                location: details.geometry.location,
                description: data.description,
            }));

            // Setting destination as null, because we haven't selected it yet
            dispatch(setDestination(null));
          }}
          enablePoweredByContainer = {false}
          fetchDetails = {true}
          onFail={error => console.log('error' + error)}
        />

        <Navigator/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

