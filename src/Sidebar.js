import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material';
import SidebarRecent from './SidebarRecent';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
   const user=useSelector(selectUser)
  return (
    <div className='Sidebar'>
    <div className='Sidebar__top'>
    <img src="https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_960_720.png" alt=""/>
    <Avatar src={user?.photoURL} className="Sidebar__avatar">{user.email[0]}</Avatar>
    <h2>{user?.displayName}</h2>
    <h4>{user?.email}</h4>
    </div>
    <div className='Sidebar__states'>
    <div className='Sidebar__state'>
    <p>Who Viewd You ?</p>
    <p className='state__number'>2.545</p>
    </div>
    <div className='Sidebar__state'>
    <p>Views On Post</p>
    <p className='state__number'>2.430</p>
    </div>
    </div>
    <div className='Sidebar__bottom'>
    <p>Recents</p>
    <SidebarRecent topic="React Js"/>
    <SidebarRecent topic="Programing"/>
    <SidebarRecent topic="Softawre Eng"/>
    <SidebarRecent topic="Design"/>
    <SidebarRecent topic="Devloper"/>
      
    </div>
    </div>
  )
}

export default Sidebar