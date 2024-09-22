import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/e-clone-75db1/us-central1/api', // Ensure this URL is correct
});
export default instance;

