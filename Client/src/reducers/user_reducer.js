import { LOGIN_USER } from "../action/type";
import { REGISTER_USER } from "../action/type";
import { AUTH_USER } from "../action/type";

export default function(state= {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}
        
        case REGISTER_USER:
            return {...state, register: action.payload}
        
        case AUTH_USER:
            return {...state, auth: action.payload}
        default:
            return state;
    }
}