// This page is used for naavigations of the HomeScreen page

import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../css/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectSource } from '../slices/navSlice';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import { setSource, setDestination } from '../slices/navSlice';

const data = [
    {
        id: "1",
        title: "Get a Spot",
        image: require('../assets/images/getspot.png'),
        screen: "MapScreen",
    },
    {
        id: "2",
        title: "See Profile",
        image: require('../assets/images/profile.png'),
        screen: "Profile",
    },
];

const Navigator = () => {
    const navigation = useNavigation();
    const source = useSelector(selectSource); // Fetching source from data layer
    const dispatch = useDispatch();
    const [location, setLocation] = useState();

    useEffect(() => {
        Geolocation.getCurrentPosition(info => {
            setLocation(info);
        });
    }, []);

    return (
        <FlatList
            data={data}
            horizontal // Render items in horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        // Setting the current location as source
                        if (!source) {
                            dispatch(setSource({
                                location: { "lat": location.coords.latitude, "lng": location.coords.longitude },
                                description: "Current Location",
                            }));

                            // Setting destination as null, because we haven't selected it yet
                            dispatch(setDestination(null));
                        }
                        navigation.navigate(item.screen);
                    }} // This will help to navigate to the item's screen(When `Get a Spot` is clicked we navigate to MapScreen)
                    style={styles.navCardContainer}
                //disabled={!source} // If there is no touch selected, then make `Get a Spot` button disabled
                >
                    {/**If there is no source selected, then make the opacity of the buttons 20 */}
                    {/* <View style={tw`${!source && "opacity-20"}`}> */}
                    <View>
                        <Image
                            resizeMode="contain"
                            style={styles.navigatorImage}
                            source={item.image}
                        />
                        <Text
                            style={[styles.navCardTitle, {
                                marginTop: -8,
                            }]}>
                            {item.title}
                        </Text>
                        <Icon
                            style={styles.navCardIcon}
                            name={'arrow-forward-outline'}
                            size={30}
                            color={Colors.white}
                        />
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id} // When a new entry is entered, keyExtractor helps to re-render just newly added item, not the all items 
        />
    );
};

export default Navigator;