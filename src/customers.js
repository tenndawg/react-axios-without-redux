import axios from 'axios';
import apiRUL from './api';

export function getCustomerList() {
    axios.get(apiURL).then(response => response.data);
}