import axios from 'axios';

export default axios.create({
  // baseURL: 'http://localhost:8080/api/v1',
  baseURL: 'https://driver-mvr-app.herokuapp.com/api/v1',
});
