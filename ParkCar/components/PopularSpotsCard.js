import { Text, SafeAreaView, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../css/MapScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';

const data = [
    {
        id: "1",
        spotName: "Azimpur Officers Quarter",
        ratings: "4.7",
        price: "50",
        distance: "1.2 mi",
    },
    {
        id: "2",
        spotName: "New Market Masjid",
        ratings: "4.3",
        price: "40",
        distance: "0.7 mi",
    },
    {
        id: "3",
        spotName: "Education Board",
        ratings: "4.4",
        price: "65",
        distance: "1.3 mi",
    },
    {
        id: "4",
        spotName: "Bakshibazar",
        ratings: "4.6",
        price: "40",
        distance: "0.6 mi",
    },
];

const PopularSpotsCard = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    onPress = {() => navigation.navigate("PickSpotCard")}
                    style = {styles.backButton}>
                        <Icon 
                            name = "chevron-back"
                            color = {Colors.black}
                            size = {20}
                        />
                </TouchableOpacity>
                <Text style = {styles.selectSpotText}>Select a Spot</Text>
            </View>
            <FlatList
                contentContainerStyle={{ paddingBottom: 80 }} // Without this, last item of FlatList gets hidden
                data = {data}
                keyExtractor = {item => item.id}
                renderItem = {({item: {id, spotName, ratings, price, distance}}) => {
                    return(
                      <TouchableOpacity style = {[styles.popularSpotContainer, styles.popularSpotContainer2]}>
                          <View>
                            <Text style = {styles.textLarge}>{spotName}</Text>
                            <View style = {{flexDirection: 'row'}}>
                              <Icon 
                                  name = "star"
                                  color = {Colors.black}
                                  size = {16}
                              />
                              <Text style = {[{paddingLeft: 5}, styles.textSmall]}>{ratings}  - </Text>
                              <Text style = {[{paddingLeft: 5}, styles.textSmall]}>1 hour away</Text>
                            </View>
                          </View>
                          <View>
                            <Text style = {styles.textMedium}>BDT {price}</Text>
                            <Text style = {styles.textMedium}>{distance}</Text>
                          </View>
                      </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    );
};

export default PopularSpotsCard;