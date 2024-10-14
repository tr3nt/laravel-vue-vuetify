import axios from 'axios'

const http = axios.create();

http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
http.defaults.withCredentials = true;
http.defaults.withXSRFToken = true;

export default http;