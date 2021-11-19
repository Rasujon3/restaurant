import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import DishDetailScreen from './screens/DishDetailScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens'
enableScreens()


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
    <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Dish Detail" component={DishDetailScreen} />

    </Stack.Navigator>
}


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Menu" component={MenuStack} />
            </Drawer.Navigator>
        </NavigationContainer>
        
    );
};

export default AppNavigator;