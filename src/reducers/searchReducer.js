import { SEARCH_RECIPE } from "../constants/searchConstant";

export const searchReducer = (state={result:[]}, action)=>{
    switch (action.type) {    
        case SEARCH_RECIPE:
            return {
                ...state,
                success:true,
                result:action.payload
            }
        
        default:
            return state;
    }
}