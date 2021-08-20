import { LOGIN_USER } from "./type";
import { REGISTER_USER } from "./type";
import axios from "axios";

export function loginUser(dataToSubmit) {
    const request = axios.post('/api/users/login', dataToSubmit)
         .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request = axios.post('/api/users/register', dataToSubmit)
          .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
}

