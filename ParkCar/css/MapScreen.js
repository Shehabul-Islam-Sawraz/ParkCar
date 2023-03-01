import { StyleSheet, Dimensions } from "react-native";
import tw from 'tailwind-react-native-classnames';
import Colors from "../Themes/Colors";

const dimensionScreen = Dimensions.get('screen');

export const styles = StyleSheet.create({
    mapScreenView: tw`h-1/2`,
    pickSpotContainer: tw`bg-white flex-1`,
    welcomeText: tw`text-center py-4 text-xl`, // py-4 means padding in y-axis(top & bottom) is of 4
    pickSpotViewBox: tw`border-t border-gray-200 flex-shrink`,
    toInputBox: {
        container: {
            backgroundColor: Colors.white,
            paddingTop: 20,
            flex: 0,
        },
        textInput: {
            backgroundColor: "#DDDDDF",
            borderRadius: 6,
            fontSize: 18,
        },
        textInputContainer: {
            paddingHorizontal: 20,
            paddingBottom: 0,
        },
    },
    footerContainer: tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-200`,
    footerIconContainer1: tw`flex flex-row justify-between bg-black w-24 px-4 py-2.5 rounded-full`,
    footerIconContainer2: tw`flex flex-row justify-between w-24 px-4 py-2.5 rounded-full w-40 bg-gray-200`,
    footerIconText1: tw`text-white text-center`,
    footerIconText2: tw`text-center text-black`,
    backButton: tw`absolute top-3 left-5 z-50 p-3 rounded-full`,
    selectSpotText: tw`text-center py-5 text-xl`,
    popularSpotContainer: tw`flex-row items-center justify-between px-6 mb-2 bg-gray-200 rounded-lg`,
    popularSpotContainer2: {
        height: 80,
        width: dimensionScreen.width / 1.04,
        alignSelf: 'center',
    },
    textLarge: tw`text-lg font-bold text-black`,
    textMedium: tw`text-base font-semibold text-gray-900`,
    textSmall: tw`text-sm font-semibold text-gray-800`,
    chooseSpotButton: tw`bg-black py-2 m-3 rounded-lg`,
    chooseSpotButtonText: tw`text-center text-white text-lg pl-5 pr-5 mb-1`,
    filterButton: {
        paddingLeft: 18,
    },
    filterSortContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 15,
        marginTop: -45,
        paddingRight: 20,
    },
    menuButton: tw`bg-gray-100 absolute top-8 left-6 z-50 p-3 rounded-full shadow-lg`,
    carMarker: {
        width: 32,
        height: 32,
    }
});