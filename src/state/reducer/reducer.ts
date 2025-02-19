import { SOURCE_TYPES } from '../../Constants';
import { InitialStateType } from '../../Types';
import { ActionTypes, Actions } from '../actions/action';

export const initialState: InitialStateType =  {
    isLoading : false,
    searchKey : '',
    searchByDate : '',
    selectedSource : SOURCE_TYPES.NEWS_API,
    NEWS_API: null,
    GUARDIAN: null,
    NEWYORK_TIMES : null
}

export function newsReducer(state: InitialStateType, action: Actions) {
    switch (action.type) {
      case ActionTypes.UPDATE_SORCE_TYPE:
        return {
          ...state,
          selectedSource: action.payload,
        };
      case ActionTypes.FETCHING_NEWS:
        return {
          ...state,
          isLoading: true,
        };
      
      case ActionTypes.UPDATE_FILTER_SEARCH:
        return {
          ...state,
          ...action.payload,
        };
  
      case ActionTypes.CLEAR_FILTER:
        return {
          ...state,
          searchKey: action.payload.searchKey,
          searchByDate: action.payload.searchByDate,
        };
  
      case ActionTypes.SET_NEWS_DATA:
        return {
          ...state,
          ...action.payload,
          isLoading : false
        };
  
  
      default:
        return state;
    }
  }