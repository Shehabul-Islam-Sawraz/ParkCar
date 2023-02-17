import React from 'react';
import {Text, View} from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import Store from './Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HelloWorldApp = () => {
    return (
        // Provider is passed with the data store layer
        <Provider store={Store}> 
            <SafeAreaProvider>
                <HomeScreen/>
            </SafeAreaProvider>
        </Provider>
    );
};
export default HelloWorldApp;