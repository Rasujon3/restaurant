import React, {useEffect} from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem';
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
            <FlatList 
                data={props.dishes}
                renderItem={
                    ({item}) => ( <MenuItem item={item} /> )
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(MenuScreen);