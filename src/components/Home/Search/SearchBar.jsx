import React, { useState } from 'react'
import s from "./SearchBar.module.css"
import {BiSearchAlt as Search, BiFoodMenu as Icon} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../../../actions/searchAction'
import {useHistory} from "react-router-dom"
import { toast } from 'react-toastify'
const SearchBar = () => {
    const dispatch = useDispatch(); 
    const {isAuthenticated} = useSelector(state=>state.login)
    const [query, setQuery] = useState("");
    const history = useHistory()
    const handleChange = (e)=>{
        setQuery(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(query===""){
            toast.warn("Please make a valid search")
            return
        }
        if(!isAuthenticated){
            toast.warn("Please login to search for your favourite dishes!!!")
            return
        }
        
        dispatch(search(query));
        history.push("/search");
    }
  return (
    <>
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.inputWrapper}>
                    <Icon className={s.inputIcon} />
                    <form onSubmit={handleSubmit}>
                        <input type="search" value={query} onChange={handleChange} placeholder={"Search for a recipie..."} />
                    </form>
                    <Search className={s.btnIcon} onClick={handleSubmit} />
                </div>
            </div>
        </div>
    </>
  )
}

export default SearchBar