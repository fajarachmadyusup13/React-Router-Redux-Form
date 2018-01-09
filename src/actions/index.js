import axios from 'axios'

export const FETCH_POST = 'fetch_post';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=IronSide666";

export function fetchData() {

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }    
}