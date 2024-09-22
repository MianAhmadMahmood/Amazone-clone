import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/e-clone-75db1/us-central1/api', // Replace with your backend URL (e.g., Firebase Cloud Functions)
});

export default instance;
