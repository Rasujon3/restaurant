import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { removeFavourite } from '../redux/actionCreator';

const mapDispatchToProps = dispatch => {
    return {
        removeFavourite: dish => dispatch(removeFavourite(dish)),
    }
}

const Card = (props) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={{uri: props.item.image}} />
            <View style={styles.details}>
                <Text style={styles.title}>{props.item.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "white",
        overflow: "hidden",
        margin: 20,
        elevation: 5,
    },
    details: {
        padding: 25,
    },
    image: {
        width: "100%",
        height: 150,
    },
    title: {
        marginBottom: 7,
        fontSize: 20,
    }
})

export default connect(null,mapDispatchToProps)(Card);