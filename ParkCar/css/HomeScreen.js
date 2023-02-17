import { StyleSheet } from "react-native";
import tw from 'tailwind-react-native-classnames';

export const styles = StyleSheet.create({
    // Background white, height full
    homeSafeAreaView: tw`bg-white h-full`,
    logo: {
        width: 120,
        height: 120,
    },
    // Padding = 5, 
    logoContainer: tw`p-3`
});