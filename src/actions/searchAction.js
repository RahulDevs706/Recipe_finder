import axios from "axios";
import { SEARCH_RECIPE } from "../constants/searchConstant";

export const search = (query)=> async(dispatch)=>{
    let result = [];

    await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`).then(res=>{
        result = res.data.recipes
    }).catch(err=>{
        console.log(err);
    })

     

    dispatch({
        type:SEARCH_RECIPE,
        payload:result
    })
}