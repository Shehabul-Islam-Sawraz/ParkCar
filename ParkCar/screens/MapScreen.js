import { Text, View } from 'react-native';
import React from 'react';
import { styles } from '../css/MapScreen';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import PickSpotCard from '../components/PickSpotCard';
import PopularSpotsCard from '../components/PopularSpotsCard';

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <View style = {styles.mapScreenView}>
        <Map/>
      </View>
      <View style = {styles.mapScreenView}>
        <Stack.Navigator>
          <Stack.Screen
            name = "PickSpotCard"
            component = {PickSpotCard}
            options = {{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name = "PopularSpotsCard"
            component = {PopularSpotsCard}
            options = {{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;