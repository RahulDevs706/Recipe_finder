import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { userReducer } from "./reducers/loginReducer"
import { searchReducer } from "./reducers/searchReducer"
import { getRecipe } from "./reducers/recipeReducer"

const reducer = combineReducers({
    login:userReducer,
    search:searchReducer,
    food:getRecipe
})

const initialState = {
    login:{
        user:localStorage.getItem("userDetails")? 
        JSON.parse(localStorage.getItem("userDetails")):
        {},
        isAuthenticated:localStorage.getItem("userDetails")? true:false
    }
}

const middleWare =[thunk]

const store = createStore(reducer, 
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleWare)
    ))

export default store;