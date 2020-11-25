import { types } from '../actions/ActionTypes';

const INITIAL_STATE = {
  loading: false,
  error: null,
  foodListData: [],
  filteredFoodList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOWFOODLISTLOADER: {
      return {
        ...state,
        loading: action.payload,
        error: action.payload && null
      };
    }
    case types.FOODLISTAPISUCCESS: {
      return {
        ...state,
        loading: false,
        foodListData: action.payload,
        filteredFoodList: action.payload,
        error: null,
      };
    }
    case types.FOODLISTAPIERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case types.FILTERFOODLIST: {
      const oldFoodList = [...state.foodListData]
      const newData = state.foodListData.filter(item => {
        const { category } = item;
        const { categoryName } = category;
        const itemData = `${categoryName.toUpperCase()}`;
        const textData = action.payload.toUpperCase();
        return itemData.includes(textData);
      });
      return {
        ...state,
        loading: false,
        error: null,
        filteredFoodList: action.payload ?  newData : state.foodListData
      };
    }
    default:
      return state;
  }
};
