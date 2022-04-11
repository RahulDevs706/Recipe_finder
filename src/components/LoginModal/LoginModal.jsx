import React, { useEffect, useState } from 'react'
import s from "./LoginModal.module.css"
import axios from "axios"

import {AiOutlineClose as Close, AiOutlineMail as Email, AiOutlineLock as Password, AiOutlineCheck as Cpassword } from "react-icons/ai"
import {BsFillPersonFill as Name} from "react-icons/bs"
import Message from '../layout/Message/Messaeg'
import {useDispatch} from "react-redux"
import { login } from '../../actions/loginActions'
import { toast } from 'react-toastify'

const LoginModal = ({isModalOpen, setIsModalOpen}) => {

    const dispatch = useDispatch();

    const [message, setMessage] = useState({
        text:"",
        status:""
    });

    const [quote, setQuote] = useState({
        text:"",
        author:""
    });

    const [ip, setIp] = useState("");


    const [formDetail, setFormDetail] = useState({

    });

    const {name, email, password, cPassword} = formDetail;


    const cStyle = {
        display:"flex",
    }

    const handleBack = ()=>{
       setIsModalOpen(false); 
    }



    useEffect(() => {
        axios.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1").then(res=>{
           setQuote(res.data.quotes[0]);
       })

       axios.get("https://api.ipify.org").then(res=>{
           setIp(res.data)
       });
    }, [isModalOpen]);

    useEffect(() => {
        if( cPassword!=="" && password!==cPassword){
            setMessage({
                text:"Passwords does not match",
                status:"fail",
            })
        }
        else{
            setMessage({
                text:"",
                status:"",
            })
        }
    }, [cPassword, password]);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormDetail({...formDetail, [name]:value})


    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await dispatch(login(formDetail));
        toast.success('Logged in successfuly')
        setIsModalOpen(false)
    }
  return (
    <>
        <div style={isModalOpen?cStyle:{display:"none"}} className={s.modal}>
            <div className={s.modalContent}>
                <div className={s.modalHeader}>
                    <div className={s.quoteWrapper}>
                        <h4>"{quote.text}"</h4>
                        <h6>-{quote.author}</h6>
                    </div>
                    <div className={s.cBtn}>
                        <Close onClick={handleBack}  />
                    </div>
                </div>

                <div className={s.contentWrapper}>
                    <form className={s.loginForm} onSubmit={handleSubmit}>
                        <div>
                            <Name />
                            <input pattern="[a-zA-Z]*" name="name" type="text" placeholder="Enter your Name" onChange={handleChange} value={name} required  autoComplete='off'/>
                        </div>
                        <div>
                            <Email />
                            <input name="email" type="email" placeholder="Enter your Email" onChange={handleChange} value={email} required autoComplete='off' />
                        </div>
                        <div>
                            <Password />
                            <input name="password" type="password" placeholder="Enter a strong Password" onChange={handleChange} value={password} minLength={6} required autoComplete='off'/>
                        </div>
                        <div>
                            <Cpassword />
                            <input name="cPassword" type="text" placeholder="Re-enter your Passwrod" onChange={handleChange} value={cPassword} required autoComplete='off' />
                        </div>
                        {message.text!==""&&(
                            <Message text={message.text} status={message.status} />
                        )}
                        <button className={s.submitBtn} disabled={message.status==="fail" && true}>
                            Login 
                        </button>
                    </form>
                </div>

                <div className={s.ipWrapper}>
                    {ip}
                </div>

            </div>
        </div>
    </>
  )
}

export default LoginModal