import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
function Header() {
  const dispatch=useDispatch()
  const logoutt=()=>{
    dispatch(logout())
  }
  const user=useSelector(selectUser)
  return (
  <div className="Header">
  <div className="Header__left">
 <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt=""/>
 <div className="Header__input">
 <SearchIcon />
 <input type="text"/>
 </div>
  </div>
  <div className="Header__right">
  <HeaderOption title="Home" Icon={HomeIcon}/>
  <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
  <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
  <HeaderOption title="Messaging" Icon={ChatIcon}/>
  <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
  <HeaderOption  title="Me" avatar={true} onClick={logoutt}/>
  </div>
  </div>
  )
}

export default Header