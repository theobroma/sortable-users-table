import { combineReducers } from 'redux';
//mock data
import MOCK_DATA from './helpers/MOCK_DATA.json';
import { FETCH_USERS_REQUEST } from './actions';

const usersInitialState = {
  data: MOCK_DATA,
  pending: false,
  error: null
};

function users(state = usersInitialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default combineReducers({
  users
});
