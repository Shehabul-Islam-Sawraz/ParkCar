import { Text, SafeAreaView, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../css/MapScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectSearchedSpots, selectTravelTimeInformation, setDestination, setSearchedSpots } from '../slices/navSlice';
import { useDispatch } from 'react-redux';

// const data = [
//   {
//     id: "1",
//     spotName: "Azimpur Officers Quarter",
//     ratings: "4.7",
//     price: "50",
//     distance: "1.2 mi",
//     latitude: 23.723676851187783,
//     longitude: 90.39576508234461,
//   },
//   {
//     id: "2",
//     spotName: "New Market Masjid",
//     ratings: "4.3",
//     price: "40",
//     distance: "0.7 mi",
//     latitude: 23.723969061637938,
//     longitude: 90.39507441353427,
//   },
//   {
//     id: "3",
//     spotName: "Education Board",
//     ratings: "4.4",
//     price: "65",
//     distance: "1.3 mi",
//     latitude: 23.72443736414864,
//     longitude: 90.39466150013554,
//   },
//   {
//     id: "4",
//     spotName: "Bakshibazar",
//     ratings: "4.6",
//     price: "40",
//     distance: "0.6 mi",
//     latitude: 23.724498752593306,
//     longitude: 90.39557881558423,
//   },
// ];

const PopularSpotsCard = () => {
  const navigation = useNavigation();
  const [selectedSpot, setSelectedSpot] = useState(null); // Tracks which spot is selected
  const travelTimeInformation = useSelector(selectTravelTimeInformation); // Fetch info about travel time from data layer
  const dispatch = useDispatch();

  const data = useSelector(selectSearchedSpots);

  // const getData = async () => {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(
  //       {
  //         "latitude": 23.72754,
  //         "longitude": 90.38596,
  //       }
  //     )
  //   }
  //   const response = await fetch("https://parkcarserver.onrender.com/search", options);
  //   const json = await response.json();
  //   console.log(json);
  //   return json;
  // }

  // useEffect(() => {
  //   dispatch(setSearchedSpots(data));
  //   //getData();
  // });

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