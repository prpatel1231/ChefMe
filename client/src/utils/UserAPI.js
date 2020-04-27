import axios from "axios";

export default {
  createUser: (data) => {
    return axios.post('/api/signup', data);
  },
  getUsers: () => {
    return axios.get('/');
  }
};