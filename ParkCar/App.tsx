import React from 'react';
import {Text, View} from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store';

const HelloWorldApp = () => {
    return (
        // Provider is passed with the data store layer
        <Provider store={Store}> 
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text>Hello, world!</Text>
            </View>
        </Provider>
    );
};
export default HelloWorldApp;