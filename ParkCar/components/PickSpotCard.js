import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../css/MapScreen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setDestination } from '../slices/navSlice';

const PickSpotCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style = {styles.pickSpotContainer}>
            <Text style = {styles.welcomeText}>
                Good Morning, Sawraz
            </Text>
            <View style = {styles.pickSpotViewBox}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder = "Where to Rent?"
                        nearbyPlacesAPI = 'GooglePlacesSearch'
                        debounce = {400}
                        styles = {styles.toInputBox}
                        listViewDisplayed = "auto"
                        query = {{
                            key: GOOGLE_MAPS_API_KEY,
                            language: "en",
                        }}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            // console.log(data, details);
                
                            // Setting the selected location as source
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));

                            navigation.navigate("PopularSpotsCard");
                        }}
                        enablePoweredByContainer = {false}
                        fetchDetails = {true}
                        minLength = {2}
                        returnKeyType = {"search"}
                        onFail={error => console.log('error' + error)}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PickSpotCard;
