import { StyleSheet } from "react-native";
import tw from 'tailwind-react-native-classnames';

export const styles = StyleSheet.create({
    // Background white, height full
    homeSafeAreaView: tw`bg-white h-full`,
    logo: {
        width: 130,
        height: 130,
    },
    // Padding = 5, 
    logoContainer: tw`p-3`,
    navigatorImage: {
        width: 120,
        height: 120,
        marginLeft: -23,
    },
    navCardContainer: tw`p-2 pl-6 pb-8 pt-2 bg-gray-200 m-2 w-40 rounded-lg`,
    navCardTitle: tw`text-lg font-semibold`,
    navCardIcon: tw`p-1 bg-black rounded-full w-10 mt-4`
});