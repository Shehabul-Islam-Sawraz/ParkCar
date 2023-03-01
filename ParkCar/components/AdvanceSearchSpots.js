import { Text, SafeAreaView, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../css/MapScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const AdvancedSearchSpots = () => {
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("AdvanceSearch")}
                    style={styles.backButton}>
                    <Icon
                        name="chevron-back"
                        color={Colors.black}
                        size={22}
                    />
                </TouchableOpacity>
                <Text style={[styles.selectSpotText, { alignSelf: 'center' }]}>Select a Spot</Text>
            </View>

            <View>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 5 }} // Without this, last item of FlatList gets hidden
                    style={{ height: 225 }}
                    data={data}
                    keyExtractor={item => item.location_id + item.parking_slot_id}
                    renderItem={({ item: { location_id, thana, road_no, rating, base_fare, distance }, item }) => {
                        return (
                            <TouchableOpacity
                                style={[styles.popularSpotContainer, styles.popularSpotContainer2, tw`${location_id === selectedSpot?.location_id && "bg-gray-300"}`]}
                                onPress={() => setSelectedSpot(item)}>
                                <View>
                                    <Text style={styles.textLarge}>{thana + ", " + road_no}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon
                                            name="star"
                                            color={Colors.black}
                                            size={16}
                                        />
                                        {/** Sets ratings & travel duration fetched from API */}
                                        <Text style={[{ paddingLeft: 5 }, styles.textSmall]}>{rating}  - </Text>
                                        <Text style={[{ paddingLeft: 5 }, styles.textSmall]}>{travelTimeInformation?.duration?.text} away</Text>
                                    </View>
                                </View>
                                <View>
                                    {/** Sets price & distance from source to destination, fetched from the API */}
                                    <Text style={styles.textMedium}>BDT {base_fare}</Text>
                                    {/* <Text style = {styles.textMedium}>
                                        {new Intl.NumberFormat("bn-BD", {
                                            style: "currency",
                                            currency: "BDT",
                                        }).format(
                                            (price)
                                        )}  
                                    </Text> */}
                                    <Text style={styles.textMedium}>{travelTimeInformation?.distance?.text}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity
                        disabled={!selectedSpot} // If no spot is selected , then disable the button
                        style={[styles.chooseSpotButton, tw`${!selectedSpot && "bg-gray-300"}`]}
                    >
                        <Text style={styles.chooseSpotButtonText}>
                            Choose Slot
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AdvancedSearchSpots;