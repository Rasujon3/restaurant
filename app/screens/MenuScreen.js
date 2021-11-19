import React from 'react';
import { Button, Text, View } from 'react-native';
import {enableScreens} from 'react-native-screens'
enableScreens(false);


const MenuScreen = (props) => {
    console.log(props);
    return (
        <View>
            <Text>Menu Screen</Text>
            <Button onPress={()=> props.navigation.navigate('Dish Detail') } title="Press"></Button>
        </View>
    );
};

export default MenuScreen;