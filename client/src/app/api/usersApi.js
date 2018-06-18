import axios from 'axios';
import mockData from '../helpers/MOCK_DATA.json';

//url fake :)
export default {
  getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return axios.get(url).then(response => {
      return mockData;
    });
  }
};

// export default {
//   getUsers() {
//     let url = window.location.href + 'data.json';
//     return axios.get(url).then(response => {
//       return response.data;
//     });
//   }
// };
