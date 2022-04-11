import { GET_RECIPE, GET_RECIPE_RESET } from "../constants/recipeConstant";

export const getRecipe = (state={foodDetails:{}}, action)=>{
    switch (action.type) {    
        case GET_RECIPE:
            return {
                ...state,
                foodDetails:action.payload
            }

        case GET_RECIPE_RESET:
            return{
                ...state,
                foodDetails:{}
            };
        default:
            return state;
    }
}