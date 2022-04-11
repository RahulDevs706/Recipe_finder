import { LOGIN_USER, LOGOUT_USER } from "../constants/loginConstant";

export const userReducer = (state={user:{}}, action)=>{
    switch (action.type) {
                
        case LOGIN_USER:
            return {
                ...state,
                isAuthenticated:true,
                user:action.payload
            }

        case LOGOUT_USER:
            return{
                ...state,
                isAuthenticated:false
            }
        
        default:
            return state;
    }
}