import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-7bf7d.firebaseio.com/'
});

export default instance;