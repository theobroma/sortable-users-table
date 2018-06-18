import UserApi from './api/usersApi';

export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';
export const FETCH_USERS_REJECTED = ' FETCH_USERS_REJECTED';

export function getUsersPending() {
  return { type: FETCH_USERS_PENDING };
}

export function getUsersRejected(error) {
  return { type: FETCH_USERS_REJECTED, error };
}

export function getUsersFullfilled(users) {
  return { type: FETCH_USERS_FULFILLED, users };
}

export function getUsers() {
  return dispatch => {
    dispatch(getUsersPending());
    UserApi.getUsers()
      .then(sleeper(100))
      .then(users => {
        return users;
      })
      .then(users => {
        dispatch(getUsersFullfilled(users));
      });
  };
}
//utility fn for request delay
function sleeper(ms) {
  return function(x) {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
}
