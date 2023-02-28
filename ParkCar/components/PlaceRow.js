import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../css/PlaceRow';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Themes/Colors';

const PlaceRow = ({ data }) => {
    console.log(data);
    return (
        <View style={styles.placeRow}>
            <View style={styles.iconContainer}>
                <Icon
                    name='location'
                    size={16}
                    color={Colors.white}
                />
            </View>
            <Text>
                {data.description}
            </Text>
        </View>
    )
};

export default PlaceRow;