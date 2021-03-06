// Action Types
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

// Initial State
const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null
}

export default function(state = initialState, action) {
  
  switch(action.type) {

    case FETCHING_COIN_DATA:
      return Object.assign(state, {
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      });
    
    case FETCHING_COIN_DATA_SUCCESS:
      return Object.assign(state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      });

    case FETCHING_COIN_DATA_FAIL:
      return Object.assign(state, {
        isFetching: false,
        data: [],
        hasError: false,
        errorMessage: action.payload
      });

    default:
      return state;
  }
}