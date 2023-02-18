import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../css/HomeScreen';
import Colors from '../Themes/Colors';

const data = [
    {
        id: "1",
        icon: "home",
        location: "Home",
        destination: "Jatra Bari, Dhaka, Bangladesh",
    },
    {
        id: "2",
        icon: "briefcase",
        location: "Work",
        destination: "BUET, Dhaka, Bangladesh",
    },
];

const FavSourceSpots = () => {
  return (
    <FlatList
        data = {data}
        keyExtractor = {item => item.id}
        ItemSeparatorComponent = {() => {
            return(
                <View
                    style = {[styles.greyBG200, styles.height]}
                />
            )
        }}
        renderItem = {({ item: { location, destination, icon} }) => {
            return(
                <TouchableOpacity 
                    style = {styles.favSpotButton}>
                    <Icon
                        style = {styles.favSpotIcon}
                        name = {icon}
                        size={18}
                        color = {Colors.black}
                    />
                    <View>
                        <Text 
                            style = {styles.favSpotLocation}>
                                {location}
                        </Text>
                        <Text 
                            style = {styles.favSpotDestination}>
                                {destination}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }}
    />
  );
};

export default FavSourceSpots;