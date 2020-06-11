

const  axios= require('axios');

const token=localStorage.getItem('token');

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer '+token}
  });

export default instance;
