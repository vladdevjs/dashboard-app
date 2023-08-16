import { combineReducers } from 'redux';
import { positionReducer } from './positions/position-reducer';
import { filterReducer } from './filters/filter-reducers';

export const rootReducer = combineReducers({ positions: positionReducer, filters: filterReducer });
