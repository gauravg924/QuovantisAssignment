import { types } from './ActionTypes';
import { CommonActions } from '@react-navigation/native';
import * as utilActions from '../util/Utility';

// for calling loading action when food list is fetched
export const showFoodListLoaderAction = bool => {
    return {
        type: types.SHOWFOODLISTLOADER,
        payload: bool
    };
};

// for filtering food list
export const filterFoodList = searchText => {
    return {
        type: types.FILTERFOODLIST,
        payload: searchText
    };
};

// for calling food list api
export const getFoodListApiAction = () => {
    return async dispatch => {
        utilActions
            .apiCall(`5f2c36626f8e4e3faf2cb42e`, null, 'GET')
            .then(response => {
                dispatch({
                    type: types.FOODLISTAPISUCCESS,
                    payload: response.categories
                });
            })
            .catch(err => {
                dispatch({
                    type: types.FOODLISTAPIERROR,
                    payload: 'Something went wrong. Please try again later'
                });
            });
    };
};