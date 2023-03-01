import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../css/AdvanceSearch';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';
import PlaceRow from '../components/PlaceRow';
import { useDispatch } from 'react-redux';
import { setDistance, setDestination, setRatings, setPrice } from '../slices/searchSlice';
import { useNavigation } from '@react-navigation/native';

const securityMerasures = {
    'CC Camera': false,
    'Guard': false,
    'Indoor': false,
};

const AdvanceSearch = () => {
    const [measures, setMeasures] = useState(securityMerasures);
    const [toggleButton, setToggleButton] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const sendSearchData = () => {
        let security = []
        Object.entries(measures).map(([key, value]) => {
            // return (
            //     value && console.log(key)
            // );
            value && security.push(key.toLowerCase());
        });
        console.log(security);
    };

    return (
        <SafeAreaView style={styles.searchContainer}>
            <View>
                <Text style={styles.advanceSearchTitle}>Advance Spots Search</Text>
                <View>
                    {/* <GooglePlacesAutocomplete
                        placeholder="Current location?"
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

                            // Setting the selected location as source
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));

                            navigation.navigate("PopularSpotsCard");
                        }}
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                        minLength={2}
                        returnKeyType={"search"}
                        onFail={error => console.log('error' + error)}
                        renderRow={(data) => <PlaceRow data={data} />}
                    /> */}


                    <GooglePlacesAutocomplete
                        placeholder="Where to Park?"
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

                            // Setting the selected location as source
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));

                        }}
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                        minLength={2}
                        returnKeyType={"search"}
                        onFail={error => console.log('error' + error)}
                        renderRow={(data) => <PlaceRow data={data} />}
                    />
                    <TextInput
                        style={styles.distanceInput}
                        onChangeText={(text) => {
                            dispatch(setDistance(text));
                        }}
                        placeholder="Distance Range?"
                        keyboardType="decimal-pad"
                    />
                    <TextInput
                        style={styles.distanceInput}
                        onChangeText={(text) => {
                            dispatch(setRatings(text));
                        }}
                        placeholder="Ratings?"
                        keyboardType="decimal-pad"
                    />
                    <TextInput
                        style={styles.distanceInput}
                        onChangeText={(text) => {
                            dispatch(setPrice(text));
                        }}
                        placeholder="Price?"
                        keyboardType="decimal-pad"
                    />
                </View>
                <View style={styles.checkboxContainer}>
                    <View style={styles.iconTitle}>
                        <Icon
                            style={styles.shieldIcon}
                            name='shield-checkmark'
                            size={20}
                            color={Colors.darkgray}
                        />
                        <Text style={styles.measureTitle}>
                            Security Measures
                        </Text>

                    </View>
                    <View style={styles.checkboxRow}>
                        <CheckBox
                            disabled={false}
                            value={measures['CC Camera']}
                            onValueChange={(value) => setMeasures({ ...measures, "CC Camera": value })}
                        />
                        <Text style={styles.measureText}>
                            CC Camera
                        </Text>
                    </View>

                    <View style={styles.checkboxRow}>
                        <CheckBox
                            disabled={false}
                            value={measures.Guard}
                            onValueChange={(value) => setMeasures({ ...measures, Guard: value })}
                        />
                        <Text style={styles.measureText}>
                            Guard
                        </Text>
                    </View>

                    <View style={styles.checkboxRow}>
                        <CheckBox
                            disabled={false}
                            value={measures.Indoor}
                            onValueChange={(value) => setMeasures({ ...measures, Indoor: value })}
                        />
                        <Text style={styles.measureText}>
                            Indoor
                        </Text>
                    </View>

                    {/* <View style = {styles.saveButton}>
                    <TouchableOpacity
                        onPress = {() => setToggleButton(toggleButton => !toggleButton)}>
                        <Text>Save</Text>
                    </TouchableOpacity>
                    {Object.entries(measures).map(([key, value]) => {
                        return(
                            value && console.log(key)
                        );
                    })}
                </View> */}
                </View>
            </View>
            <View style={styles.saveButton}>
                <TouchableOpacity
                    onPress={() => {
                        //setToggleButton(toggleButton => !toggleButton)
                        sendSearchData();
                        navigation.navigate("AdvanceSearchSpots");
                    }}>
                    <Text style={styles.saveText}>Search</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AdvanceSearch;