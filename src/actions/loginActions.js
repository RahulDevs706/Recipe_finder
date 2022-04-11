import axios from "axios";
import { LOGOUT_USER, LOGIN_USER } from "../constants/loginConstant";

export const login = (details)=> async(dispatch, getState)=>{


        await axios.get(`https://api.genderize.io?name=${details?.name}`).then(res=>{
            details.gender = res.data.gender;
        })

        await axios.get(`https://api.agify.io?name=${details?.name}`).then(res=>{
            details.age = res.data.age;
        })

        await axios.get(`https://api.nationalize.io?name=${details?.name}`).then(res=>{
            details.nationality = res.data.country[0].country_id;
        })

        // details.isAuthenticated=true;

        dispatch({
            type:LOGIN_USER,
            payload:details
        })

        localStorage.setItem("userDetails", JSON.stringify(getState().login.user));
}

export const logout = ()=> async(dispatch, getState)=>{
    localStorage.removeItem("userDetails");

    dispatch({
        type:LOGOUT_USER
    })
}
