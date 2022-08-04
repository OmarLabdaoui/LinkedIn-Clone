
import { useEffect, useState } from 'react';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import db, { auth } from './firebase';
import Header from './Header';
import Sidebar from './Sidebar';
import { useDispatch, useSelector} from 'react-redux'
import Login from './Login';
import Widgets from './Widgets';
function App() {
  const dispatch=useDispatch()

  const user=useSelector(selectUser)
  useEffect(()=>{
 auth.onAuthStateChanged((autUser)=>{
   if(autUser){

     dispatch(login({
  
       uid:autUser.uid,
       email:autUser.email,
       photoURL:autUser.photoURL,
       displayName:autUser.displayName,
     }))
   }else{
     dispatch(logout())
   }
 })
  },[])
  return (
    <div className="app">
    {!user? 

      <Login/>
      : 
      <>
      <Header/>
      <div className="app-body">
      <Sidebar/>
      <Feed/>
      <Widgets/>
      </div>
      </>
    }
     
    </div>
  );
}

export default App;
