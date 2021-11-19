import React from 'react';
import { Button, Text, View } from 'react-native';


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