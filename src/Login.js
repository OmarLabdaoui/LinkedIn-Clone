import React, { useState } from 'react'
import { auth } from './firebase'
import "./Login.css"

import {login, logout} from './features/userSlice'
import { useDispatch } from 'react-redux'
function Login() {
  const dispatch=useDispatch()
  const [name,setName]=useState("")
  const [email,setemail]=useState("")
  const [photopic,setPhotopic]=useState("")
  const [password,setPassword]=useState("")
  const logini=(e)=>{
e.preventDefault();
auth.signInWithEmailAndPassword(email,password)
.then(authuser =>{
  dispatch(login({
    uid:authuser.user.uid,
    displayName:authuser.user.displayName,
    email:authuser.user.email,
    photoURL:authuser.user.photoURL,
  }))
}).catch(error =>alert(error))
  }
  const register=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then(authuser => {
     authuser.user.updateProfile({
       displayName:name,
       photoURL:photopic,
     })
     .then(()=>{
       dispatch(login({
         uid:authuser.user.uid,
         displayName:name,
         email:authuser.user.email,
         photoURL:photopic,
       }))
     })
    }).catch(error=>alert(error))
  }
  return (
    <div className="login">
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"/>
    <form>
    <input type="text" className="" value={name} placeholder="Enter Your Name " onChange={(e)=>setName(e.target.value)}/>
    <input type="email" className="" value={email} placeholder="Enter Your Email Adresse" onChange={(e)=>setemail(e.target.value)}/>
    <input type="text" className="" value={photopic} placeholder="Enter Your Photo Url" onChange={(e)=>setPhotopic(e.target.value)}/>
    <input type="password" className="" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    
    <button type='submit' onClick={logini} >Sign In </button>
    </form>
    <p>Not a Member ? {" "}<span className="login__href" onClick={register}>Register now</span></p>
    </div>
  )
}

export default Login