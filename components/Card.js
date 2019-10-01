import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        //All the shadow settings are for IOS and not android.
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        //Elevation setting works for android but is more limited than Shadow. Just the one setting.
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
})
export default Card;