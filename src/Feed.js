import React, { useEffect, useState } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {FiEdit} from "react-icons/fi";
import "./Feed.css"
import EventNoteIcon from '@mui/icons-material/EventNote';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SectionOptions from './SectionOptions';
import Post from './Post';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import db from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {
  const user=useSelector(selectUser)
  const [input,setInput]=useState('');
  const [posts,setPosts]=useState([]);
  useEffect(() =>{
    db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => (
      setPosts(snapshot.docs.map((doc)=>(
        {
          id:doc.id,
          data:doc.data()
        }
      )))
    ))
    },[])
const sendPost=(e)=>{
e.preventDefault();
db.collection('posts').add({
  message:input,
  name:user.displayName,
  photoURL:user.photoURL || '',
  timestamp:firebase.firestore.FieldValue.serverTimestamp(),
  description:user.email,
})
setInput("")
}
  
  return (
    <div className='Feed'>
   
    <div className='Section__top'>
  
    <div className='Section__input'>
    <FiEdit className="section__icon"/>
    <form>
    <input type='text' placeholder='Save The Post' value={input} onChange={(e)=>setInput(e.target.value)}/>
    <button type='submit' className='Section__btn' onClick={sendPost}> Add post</button>
    </form>
    </div>
    
    <div className='Section__options'>
     <SectionOptions  Icon={InsertPhotoIcon} title='Photo' color='blue'/>
     <SectionOptions  Icon={YouTubeIcon} title='Video' color='red'/>
     <SectionOptions  Icon={EventNoteIcon} title='Event' color='orange'/>
     <SectionOptions  Icon={AssignmentIcon} title='Write Article' color='green'/>
    </div>
    </div>
   
    <div className="Post__section">
    <FlipMove>
    {posts.map(({id ,data:{message,description,timestamp,photoURL,name}})=>(
      <Post key={id} name={name} message={message} description={description} timestamp={timestamp} photoURL={photoURL}/>
    ))}
    </FlipMove>
    
    </div>
   
    </div>
    
    
    
  )
}

export default Feed