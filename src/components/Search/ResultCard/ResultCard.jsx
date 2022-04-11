import React, { useState } from 'react'
import RecipeModal from '../RecipeModal/RecipeModal';
import s from "./ResultCard.module.css"

const ResultCard = ({title, id, pubName, sURL, imgURL}) => {
    const [open, setOpen] = useState(false);

  return (
    <>
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.foodImgWrapper}>
                    <img src={imgURL} alt={title} className={s.foodImg} />
                </div>

                <div className={s.foodDetails}>
                    <h2>{title}</h2>
                    <h3>{`ID: ${id}`}</h3>
                    <h3>{`Publisher Name: ${pubName}`}</h3>
                    <a href={sURL} target="blank">Source</a>
                </div>
                <button onClick={()=>setOpen(true)}>
                    Get Ingredients
                </button>
            </div>
                {open&& <RecipeModal isModalOpen={open} setIsModalOpen={setOpen} id={id} />}
        </div>
    </>
  )
}

export default ResultCard