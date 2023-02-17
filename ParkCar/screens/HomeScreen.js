import { Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import { styles } from '../css/HomeScreen';
import Navigator from '../components/Navigator';

const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.homeSafeAreaView}>
      <View style = {styles.logoContainer}>
        <Image
            resizeMode = "contain"
            style = {styles.logo}
            source={require('../assets/images/logo.png')}
        />
        <Navigator/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

