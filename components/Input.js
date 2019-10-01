import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Card from '../components/Card'; 7
import Colors from '../constants/colors';

const Input = props => {
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;

};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;