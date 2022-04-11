import React, { useEffect, useState } from 'react'
import s from "./Footer.module.css"
import axios from "axios";

const Footer = () => {

  const [text, setText] = useState("");

  
  useEffect(() => {
    axios.get("https://catfact.ninja/fact?max_length=100").then(res=>{
      setText(res.data.fact)
    });
  }, []);
  
  console.log(text)
  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <p><b>Did you know? </b><br />{text}</p>
        </div>
      </div>
    </>
  )
}

export default Footer