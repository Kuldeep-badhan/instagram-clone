import React from 'react'

import Feed from '../Feed/Feed'
import RightSideBar from '../RightSideBar/RightSideBar'

import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
        <Feed/>
        <RightSideBar/>
    </div>
  )
}

export default Home
