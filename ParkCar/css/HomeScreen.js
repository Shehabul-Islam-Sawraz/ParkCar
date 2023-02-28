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
    navCardIcon: tw`p-1 bg-black rounded-full w-10 mt-4`,
    whereFromContainer: {
        container: {
            flex: 0,
        },
        textInput: {
            fontSize: 18,
        },
    },
    favSpotIcon: tw`mr-4 rounded-full bg-gray-300 p-3`,
    favSpotButton: tw`flex-row items-center p-4`,
    favSpotLocation: tw`font-semibold text-lg`,
    favSpotDestination: tw`text-gray-500`,
    greyBG200: tw`bg-gray-200`,
    height: {
        height: 1.5,
    },
});