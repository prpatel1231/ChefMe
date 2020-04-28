import axios from "axios";

export default {
  createUser: (data) => {
    return axios.post('/api/signup', data);
  },
  findUser: (data) => {
    return axios.post('/api/', data);
  }
};