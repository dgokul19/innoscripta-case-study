import { FilterProps, NewsAPiTypeResponse } from '../../Types';

// Define action types as an enum to ensure consistency and prevent typos
export enum ActionTypes {
    SET_NEWS_DATA = "SET_NEWS_DATA",
    FETCHING_NEWS = "FETCHING_NEWS",
    SET_ERROR = "SET_ERROR",
    UPDATE_SORCE_TYPE = "UPDATE_SORCE_TYPE",
    UPDATE_FILTER_SEARCH = "UPDATE_FILTER_SEARCH",
    CLEAR_FILTER = "CLEAR_FILTER",
    FETCH_DATA_FAILED = "FETCH_DATA_FAILED"
}

export type ErrorFetchingApiAction = {
    type: ActionTypes.FETCH_DATA_FAILED;
};

export type FetchingNewsAction = {
    type: ActionTypes.FETCHING_NEWS;
};

export type SetNewsDataAction = {
    type: ActionTypes.SET_NEWS_DATA;
    payload: NewsAPiTypeResponse;
};

export type UpdateNewsSourceType = {
    type: ActionTypes.UPDATE_SORCE_TYPE;
    payload: String;
};

export type UpdateSearchFilter = {
    type: ActionTypes.UPDATE_FILTER_SEARCH;
    payload: FilterProps;
};
export type ClearFilterProps = {
    type: ActionTypes.CLEAR_FILTER;
    payload: FilterProps;
};

// Define a union type Actions to represent all possible action types
export type Actions =
  | FetchingNewsAction
  | SetNewsDataAction
  | UpdateNewsSourceType
  | UpdateSearchFilter
  | ErrorFetchingApiAction
  | ClearFilterProps;