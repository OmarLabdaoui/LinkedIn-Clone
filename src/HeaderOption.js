import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css';
function HeaderOption({avatar,title,Icon,onClick}) {
  const user=useSelector(selectUser)
  return (
    <div className="HeaderOption">
    {Icon &&<Icon className="Header__icon"/>}
    {avatar && <Avatar  className="Header__icon" onClick={onClick} >{user?.email[0]}</Avatar>}
    <h3 className="Header__title">{title}</h3>
    </div>
  )
}

export default HeaderOption