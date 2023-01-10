import React from 'react'
import { Stack, Avatar } from '@mui/material'

import './Feed.scss'
import Header from './Header/Header'
import Post from './Post/Post'

const Feed = () => {
  return (
    <div className='feed'>
    <Stack>
    {/* Header status */}
    <Header/>
    {/* Posts */}
    <Post 
  displayName={'karan'}
  postImgUrl='https://cdn.britannica.com/95/136995-050-6209F94F/rainforest-Malaysia.jpg'
  postDescription={'The forest is a beautiful place to go.'}
    Avatar={Avatar}
    />
    </Stack>
    </div>
  )
}

export default Feed
