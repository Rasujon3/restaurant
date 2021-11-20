import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import DishDetailScreen from './screens/DishDetailScreen';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from './components/Icon';
import { useNavigation } from '@react-navigation/native';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
    const navigation = useNavigation();
   return (
        <Stack.Navigator 
            screenOptions={{
                headerRight: () => (<Icon
                    action={()=> navigation.toggleDrawer()}
                    name="ios-menu"
                    color="balck"
                    size={24}
                    iconStyle={{
                        paddingRight: 15
                    }}
                    />),
                headerStyle: {
                    backgroundColor: "#F53B50",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Dish Detail" component={DishDetailScreen} 
                options={({route}) => ({title: route.params.dish.name})} />
        </Stack.Navigator>
    )
}


const AppNavigator = () => {
    return (    
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu" component={MenuStack} />
        </Drawer.Navigator> 
        
    );
};

export default AppNavigator;