// This page is used for naavigations of the HomeScreen page

import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from '../css/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';
import { useNavigation } from '@react-navigation/native';

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

    return (
        <FlatList
            data={data}
            horizontal // Render items in horizontal
            renderItem = {({item}) => (
                <TouchableOpacity
                    onPress = {() => navigation.navigate(item.screen)} // This will help to navigate to the item's screen(When `Get a Spot` is clicked we navigate to MapScreen)
                    style = {styles.navCardContainer}>
                        <View>
                            <Image
                                resizeMode = "contain"
                                style = {styles.navigatorImage}
                                source = {item.image}
                            />
                            <Text
                                style = {[styles.navCardTitle, {
                                    marginTop: -8,
                                }]}>
                                    {item.title}
                            </Text>
                            <Icon
                                style = {styles.navCardIcon}
                                name = {'arrow-forward-outline'}
                                size={30}
                                color = {Colors.white}
                            />
                        </View>
                </TouchableOpacity>
            )}
            keyExtractor = {item => item.id} // When a new entry is entered, keyExtractor helps to re-render just newly added item, not the all items 
        />
    );
};

export default Navigator;