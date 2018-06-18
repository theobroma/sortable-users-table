import { combineReducers } from 'redux';
//mock data
import MOCK_DATA from './helpers/MOCK_DATA.json';

import {
  FETCH_USERS_PENDING,
  FETCH_USERS_FULLFILED,
  FETCH_USERS_REJECTED,
  FETCH_USERS_FULFILLED
} from './actions';

export const usersInitialState = {
  data: [],
  pending: false,
  errorMessage: ''
};

function users(state = usersInitialState, action) {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_USERS_REJECTED:
      return {
        ...state,
        pending: false,
        errorMessage: action.error
      };
    case FETCH_USERS_FULFILLED:
      return {
        ...state,
        pending: false,
        data: action.users
      };
    default:
      return state;
  }
}

export default combineReducers({
  users
});
