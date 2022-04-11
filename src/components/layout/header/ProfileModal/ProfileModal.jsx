import React from 'react'
import s from "./ProfileModal.module.css"

import {AiOutlineClose as Close} from "react-icons/ai"

import { useSelector} from "react-redux"

const ProfileModal = ({isModalOpen, setIsModalOpen}) => {

    const {name, email, gender, age, nationality } = useSelector(state=>state.login.user)

    const cStyle = {
        display:"flex",
    }

    const handleBack = ()=>{
       setIsModalOpen(false); 
    }

  return (
    <>
        <div style={isModalOpen?cStyle:{display:"none"}} className={s.modal}>
            <div className={s.modalContent}>
                <div className={s.modalHeader}>
                    <div className={s.title}>
                        <h1>{`${name}'s Profile`}</h1>
                    </div>
                    <div className={s.cBtn}>
                        <Close onClick={handleBack}  />
                    </div>
                </div>

                <div className={s.contentWrapper}>
                   <div>
                    <h3><span>Name: </span>{name}</h3>
                    <h3><span>Email: </span>{email}</h3>
                    <h3><span>Gender: </span>{gender}</h3>
                    <h3><span>Age: </span>{age}</h3>
                    <h3><span>Nationality: </span>{nationality}</h3>
                   </div>

                </div>

            </div>
        </div>
    </>
  )
}

export default ProfileModal;