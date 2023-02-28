import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from '../css/MapScreen';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import PickSpotCard from '../components/PickSpotCard';
import PopularSpotsCard from '../components/PopularSpotsCard';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      {/** Menu Button Code */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate("HomeScreen")}>
        <Icon
          name="menu"
          color={Colors.black}
          size={17}
        />
      </TouchableOpacity>

      <View style={styles.mapScreenView}>
        <Map />
      </View>
      <View style={styles.mapScreenView}>
        <Stack.Navigator>
          <Stack.Screen
            name="PickSpotCard"
            component={PickSpotCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PopularSpotsCard"
            component={PopularSpotsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;