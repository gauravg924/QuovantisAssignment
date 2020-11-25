import { combineReducers } from 'redux';
import FoodListReducer from './FoodListReducer';

export default combineReducers({
    foodListReducer: FoodListReducer,
});
