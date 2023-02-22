import { StyleSheet, Dimensions } from "react-native";
import tw from 'tailwind-react-native-classnames';
import Colors from "../Themes/Colors";

const dimensionScreen = Dimensions.get('screen');

export const styles = StyleSheet.create({
    searchContainer: tw`bg-white flex-1 pt-6`,
    advanceSearchTitle: tw`text-center text-xl text-gray-900 font-semibold pb-2`,
    toInputBox: {
        container: {
            backgroundColor: Colors.white,
            paddingTop: 8,
            flex: 0,
        },
        textInput: {
            backgroundColor: "#DDDDDF",
            borderRadius: 6,
            fontSize: 17,
        },
        textInputContainer: {
            paddingHorizontal: 14,
            paddingBottom: 0,
        },
    },
    distanceInput: {
        height: 50,
        margin: 14,
        backgroundColor: '#DDDDDF',
        fontSize: 17,
        borderRadius: 6,
        paddingHorizontal: 14,
        marginTop: 8,
        marginBottom: 6,
    },
    checkboxContainer: {
        // padding: 10,
        // margin: 5,
        // alignSelf: "flex-start",
        paddingHorizontal: 16,
        top: 20,
    },
    checkbox: {
    },
    container: {
        backgroundColor: '#fff',
        padding: 8,
        flexDirection: "column",
    },
    measureTitle: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#5c5b5b',
    },
    box: {
        width: 22,
        height: 22,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 2,
        marginRight: 5,
    },
    checkboxRow: {
        top: 10,
        flexDirection: "row",
        alignItems: "center",
        left: 10,
        paddingBottom: 5,
    },
    saveButton: {
        top: 50,
        width: '30%',
        alignSelf: "center",
        alignItems: "center",
    },
    iconTitle: {
        flexDirection: "row",
    },
    shieldIcon: {
        paddingTop: 3,
        paddingRight: 5,
    },
    measureText: {
        fontSize: 17,
        paddingLeft: 3,
    },
});