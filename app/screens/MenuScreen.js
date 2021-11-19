import React, {useEffect} from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getDishes } from '../redux/actionCreator';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => dispatch(getDishes()),
    }
}

const MenuScreen = (props) => {
    useEffect(()=> {
        props.getDishes();
    }, [])
    console.log(props);
    return (
        <View>
            <Text>Menu Screen</Text>
            <Button onPress={()=> props.navigation.navigate('Dish Detail') } title="Press"></Button>
        </View>
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(MenuScreen);