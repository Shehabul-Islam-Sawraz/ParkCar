import React from 'react';
import {Text, View, KeyboardAvoidingView, Platform} from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import Store from './Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator(); // Initializing Stack Navigator

const HelloWorldApp = () => {
    return (
        // Provider is passed with the data store layer
        <Provider store={Store}> 
            <NavigationContainer>
                <SafeAreaProvider>
                    {/** Without flex=1, screen can't be seen */}
                    <KeyboardAvoidingView 
                        style = {{flex: 1}}
                        behavior = {Platform.OS === "ios" ? "padding" : "height"}
                        keyboardVerticalOffset = {Platform.OS === "ios" ? -64 : 32}> 
                            <Stack.Navigator>
                                <Stack.Screen
                                    name = 'HomeScreen'
                                    component = {HomeScreen}
                                    options = {{
                                        headerShown: false, // Hiding the header of the screen
                                    }}
                                />
                                <Stack.Screen
                                    name = 'MapScreen'
                                    component = {MapScreen}
                                    options = {{
                                        headerShown: false, // Hiding the header of the screen
                                    }}
                                />
                            </Stack.Navigator>
                    </KeyboardAvoidingView>
                </SafeAreaProvider>
            </NavigationContainer>
        </Provider>
    );
};
export default HelloWorldApp;