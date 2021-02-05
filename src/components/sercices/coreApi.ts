import axios from 'axios';

const coreApi = axios.create({
  baseURL: 'https://core.ac.uk:443/api-v2/search',
});

export default coreApi;
