import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import HeaderOption from './HeaderOption';
import SectionOptions from './SectionOptions';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import {forwardRef} from "react"
const Post=forwardRef(({name,description,message,photoURL},ref)=> {
  return (
    <div className='Post' ref={ref}>
    <div className='post__header'>
    {photoURL ?
          <Avatar src={photoURL} /> :
          <Avatar >{name}</Avatar>
        }
    <div className='Hedear__infos'>
    <h3>{name}</h3>
    <p>{description}</p>
    </div>
   
    </div>
    <div className='post_body'>
    <p>{message}</p>
    </div>
    <div className='post_button'>
    <SectionOptions Icon={ThumbUpOffAltIcon} title='Like' color="gray"/>
    <SectionOptions Icon={CommentIcon} title='Comments' color="gray"/>
    <SectionOptions Icon={ShareIcon} title='Share' color="gray"/>
    <SectionOptions Icon={SendIcon} title='Send' color="gray"/>
    </div>
    </div>
  )
})

export default Post
