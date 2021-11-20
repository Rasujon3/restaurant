import axios from 'axios';
import * as actionTypes from './actionTypes';

export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    }
}

export const getDishes = () => dispatch => {
    axios.get("https://restaurant-15bdd-default-rtdb.asia-southeast1.firebasedatabase.app/.json")
        .then(response => dispatch(loadDishes(response.data)))
        .then(err => console.log(err))
}

export const addToFavourites = (dish) => {
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        payload: dish,
    }
}