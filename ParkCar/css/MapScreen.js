import { StyleSheet } from "react-native";
import tw from 'tailwind-react-native-classnames';
import Colors from "../Themes/Colors";

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
    }
});