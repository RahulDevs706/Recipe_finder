import { GET_RECIPE } from "../constants/recipeConstant";
import axios from "axios";

export const getRecipe = (id)=> async(dispatch)=>{
    let result = {};

    await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`).then(res=>{
        result = res.data
    }).catch(err=>{
        console.log(err);
    })

    dispatch({
        type:GET_RECIPE,
        payload:result
    })
}