import React, { useState } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
//This is a function outside the functional component.
const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min); //if a double is entered rounds it up to the nearest whole number.
    max = Math.floor(max); //rounds the double down.


    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    //Math.random gives a number between 0 and 1/thats why is multiplyed by (max - min)+min
    if (rndNum === exclude) {
        //This checks to see if the random number is the same the exclude number

        //if it is it runs the entire fubction again #recursion
        return generateRandomBetween(min, max, exclude);
    }
    //else return the generated random number
    else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100,props.userChoice));
    // the currentGuess is our state / ie useState
};

return (
    <View>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
<Card>
    <Button title='LOWER' onPress={() => {}}></Button>
    <Button title='GREATER' onPress={() => {}}></Button>
    </Card>
    </View>
);

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    }
});

export default GameScreen;