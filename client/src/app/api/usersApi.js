import axios from 'axios';
import mockData from '../helpers/MOCK_DATA.json';

//url fake :)
const url = 'https://jsonplaceholder.typicode.com/posts';

export function getUsers() {
  return axios.get(url).then(response => {
    return mockData;
  });
}

export function addUser(user) {
  return axios.post(url, user).then(response => {
    return user;
  });
}

// export default {
//   getUsers() {
//     let url = window.location.href + 'data.json';
//     return axios.get(url).then(response => {
//       return response.data;
//     });
//   }
// };
export default {
  getUsers,
  addUser
};
