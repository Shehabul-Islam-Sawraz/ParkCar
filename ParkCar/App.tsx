import React, { useEffect } from 'react';
import { Text, View, KeyboardAvoidingView, Platform, PermissionsAndroid } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import Store from './Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import AdvanceSearch from './screens/AdvanceSearch';
import Geolocation from '@react-native-community/geolocation';

const Stack = createStackNavigator(); // Initializing Stack Navigator
navigator.geolocation = require('@react-native-community/geolocation'); // For accessing current location

const HelloWorldApp = () => {

    // Setting for User Permission
    const androidPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'ParkCar Location Access Permission',
                    message:
                        'ParkCar wants to access your location ' +
                        'so you can take awesome rental experience.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the location');
            } else {
                console.log('Location access permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {
        if (Platform.OS == "android") {
            androidPermission();
        }
        else {
            // For IOS
            Geolocation.requestAuthorization();
        }
    }, []);

    return (
        // Provider is passed with the data store layer
        <Provider store={Store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    {/** Without flex=1, screen can't be seen */}
                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
                        <Stack.Navigator>
                            <Stack.Screen
                                name='HomeScreen'
                                component={HomeScreen}
                                options={{
                                    headerShown: false, // Hiding the header of the screen
                                }}
                            />
                            <Stack.Screen
                                name='MapScreen'
                                component={MapScreen}
                                options={{
                                    headerShown: false, // Hiding the header of the screen
                                }}
                            />
                            <Stack.Screen
                                name='AdvanceSearch'
                                component={AdvanceSearch}
                                options={{
                                    headerShown: false, // Hiding the header of the screen
                                }}
                            />
                            {/* <Stack.Screen
                                name='AdvanceSearchSpots'
                                component={AdvanceSearch}
                                options={{
                                    headerShown: false, // Hiding the header of the screen
                                }}
                            /> */}
                        </Stack.Navigator>
                    </KeyboardAvoidingView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
};
export default HelloWorldApp;