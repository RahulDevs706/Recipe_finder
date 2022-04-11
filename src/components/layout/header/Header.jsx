import React, { useState } from 'react'
import LoginModal from '../../LoginModal/LoginModal';
import s from  "./Header.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../actions/loginActions';
import { Link } from 'react-router-dom';
import ProfileModal from './ProfileModal/ProfileModal';
import { toast } from 'react-toastify'

const Header = () => {
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(state=>state.login);
  const [open, setOpen] = useState(false);

  const [openProfile, setOpenProfile] = useState(false);

  const handleClick = ()=>{
    setOpen(true);
  }

  const handleLogout = async()=>{
    dispatch(logout());
    toast.success('Logged out successfuly')
  }
  return (
    <>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.logoWrapper}>
              <Link to="/"><h1>Recipes</h1></Link>
            </div>
            
            <div className={s.btnWrapper}>
              {
                isAuthenticated && (
                  <div className={s.userAvatar}>
                    <img onClick={()=>setOpenProfile(true)} src='/Profile.png' alt='user' className={s.userImg} />
                  </div>
                )
              }

              {isAuthenticated ?(
                <button className={s.logout} onClick={handleLogout} >
                  Logout
                </button>):(
                <button onClick={handleClick}>
                  Login
                </button>
              )}
              {open && <LoginModal isModalOpen={open} setIsModalOpen={setOpen} />}
              {openProfile && <ProfileModal isModalOpen={openProfile} setIsModalOpen={setOpenProfile} />}
            </div>
        </div>
      </div>
    </>
  )
}

export default Header