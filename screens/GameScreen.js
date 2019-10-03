import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
//This is a function outside the functional component.
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min); //if a double is entered rounds it up to the nearest whole number.
    max = Math.floor(max); //rounds the double down.
    const rndNum = Math.floor(Math.random() * (max - min)) + min; //Math.random gives a number between 0 and 1/thats why is multiplyed by (max - min)+min
    if (rndNum === exclude) { //This checks to see if the random number is the same the exclude number
        return generateRandomBetween(min, max, exclude);//if it is it runs the entire fuNction again #recursion
    }
    else {//else return the generated random number
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const { userChoice,onGameOver} = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    },[currentGuess,userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) ||
            (direction === 'higher' && currentGuess > props.userChoice)
        ) {
            Alert.alert('Dont\'t lie', 'You know this is wrong...', [
                { text: 'Sorry!', style: 'cancel' }
            ]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(
            currentLow.current,
            currentHigh.current,
            currentGuess
        );
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1)
    };
    // the currentGuess is our state / ie useState
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'higher')} />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;