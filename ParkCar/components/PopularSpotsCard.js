import { Text, SafeAreaView, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../css/MapScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

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
  const [selectedSpot, setSelectedSpot] = useState(null); // Tracks which spot is selected
  const travelTimeInformation = useSelector(selectTravelTimeInformation); // Fetch info about travel time from data layer

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PickSpotCard")}
          style={styles.backButton}>
          <Icon
            name="chevron-back"
            color={Colors.black}
            size={22}
          />
        </TouchableOpacity>
        <Text style={[styles.selectSpotText, { alignSelf: 'center' }]}>Select a Spot</Text>
      </View>
      <View style={styles.filterSortContainer}>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => navigation.navigate("PickSpotCard")} /////Have to change this////////////
        >
          <Icon
            name="filter"
            color={Colors.black}
            size={22}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate("PickSpotCard")} /////Have to change this///////////
        >
          <Icon
            name="funnel"
            color={Colors.black}
            size={22}
          />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 5 }} // Without this, last item of FlatList gets hidden
          style={{ height: 225 }}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item: { id, spotName, ratings, price, distance }, item }) => {
            return (
              <TouchableOpacity
                style={[styles.popularSpotContainer, styles.popularSpotContainer2, tw`${id === selectedSpot?.id && "bg-gray-300"}`]}
                onPress={() => setSelectedSpot(item)}>
                <View>
                  <Text style={styles.textLarge}>{spotName}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon
                      name="star"
                      color={Colors.black}
                      size={16}
                    />
                    {/** Sets ratings & travel duration fetched from API */}
                    <Text style={[{ paddingLeft: 5 }, styles.textSmall]}>{ratings}  - </Text>
                    <Text style={[{ paddingLeft: 5 }, styles.textSmall]}>{travelTimeInformation?.duration?.text} away</Text>
                  </View>
                </View>
                <View>
                  {/** Sets price & distance from source to destination, fetched from the API */}
                  <Text style={styles.textMedium}>BDT {price}</Text>
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
          <TouchableOpacity
            style={styles.chooseSpotButton}
          >
            <Text style={styles.chooseSpotButtonText}>
              Advance Search
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PopularSpotsCard;