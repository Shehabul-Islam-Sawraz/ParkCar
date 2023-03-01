import { Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../css/MapScreen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectDestination, selectSource, setDestination, setSearchedSpots } from '../slices/navSlice';
import FavSourceSpots from './FavSourceSpots';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';
import PlaceRow from '../components/PlaceRow';

const PickSpotCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const dest = useSelector(selectDestination);
    const [loctn, setLocation] = useState();

    const getData = async () => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    // "latitude": loctn?.lat,
                    // "longitude": loctn?.lng,
                    "latitude": 23.72754,
                    "longitude": 90.38596
                }
            )
        }
        const response = await fetch("https://parkcarserver.onrender.com/search", options);
        const json = await response.json();
        //console.log(json.data[0]);

        dispatch(setSearchedSpots(json.data));
    }

    return (
        <SafeAreaView style={styles.pickSpotContainer}>
            <Text style={styles.welcomeText}>
                Good Morning, Sawraz
            </Text>
            <View style={styles.pickSpotViewBox}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where to Rent?"
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        styles={styles.toInputBox}
                        listViewDisplayed="auto"
                        query={{
                            key: GOOGLE_MAPS_API_KEY,
                            language: "en",
                        }}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            // console.log(data, details);

                            setLocation(details.geometry.location);

                            // Setting the selected location as source
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));

                            setTimeout(() => {
                                getData();
                            }, 1000);

                            navigation.navigate("PopularSpotsCard");
                        }}
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                        minLength={2}
                        returnKeyType={"search"}
                        onFail={error => console.log('error' + error)}
                        renderRow={(data) => <PlaceRow data={data} />}
                    />
                </View>
                <FavSourceSpots />
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity
                    style={styles.footerIconContainer1}
                    onPress={() => navigation.navigate('PopularSpotsCard')}>
                    <Icon
                        name="car"
                        color={Colors.white}
                        size={16}
                    />
                    <Text style={styles.footerIconText1}>Slots</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.footerIconContainer2}
                    onPress={() => navigation.navigate("AdvanceSearch")}>
                    <Icon
                        name="search"
                        color={Colors.black}
                        size={16}
                    />
                    <Text style={styles.footerIconText2}>Advance Search</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default PickSpotCard;
