import React, { useEffect } from 'react'
import s from "./RecipeModal.module.css"
import {AiOutlineClose as Close} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { getRecipe } from '../../../actions/recipeAction'
import { GET_RECIPE_RESET } from '../../../constants/recipeConstant'

const RecipeModal = ({isModalOpen, setIsModalOpen, id}) => {

    const cStyle = {
        display:"flex",
    }

    const data = useSelector(state=>state.food.foodDetails.recipe)

    const dispatch = useDispatch();

    const handleBack = ()=>{
        setIsModalOpen(false); 
        dispatch({
            type:GET_RECIPE_RESET
        })
    }
    
    useEffect(() => {
        dispatch(getRecipe(id))
    },[dispatch, id]);



  return (
    <>
    <div style={isModalOpen?cStyle:{display:"none"}} className={s.modal}>
        <div className={s.modalContent}>
            <div className={s.modalHeader}>
                <div className={s.title}>
                    <h1>{data?.title}</h1>
                    <p>#{id}</p>
                </div>
                <div className={s.cBtn}>
                    <Close onClick={handleBack}  />
                </div>
            </div>

            <div className={s.contentWrapper}>
                <h2>Ingredients:</h2>
                <ul>
                    {data?.ingredients?.map(item=>(
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
</>
  )
}

export default RecipeModal