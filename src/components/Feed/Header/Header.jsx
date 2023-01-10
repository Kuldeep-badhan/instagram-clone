import React from 'react'
import { Avatar } from '@mui/material'

import './Header.scss'
import HeaderAvatar from './HeaderAvatar'

const Header = () => {
  return (
    <div className='header'>
      <HeaderAvatar  Avatar={Avatar} name='kuldeep' />
      <HeaderAvatar  Avatar={Avatar} name='kuldeep' />
      <HeaderAvatar  Avatar={Avatar} name='kuldeep' />
      <HeaderAvatar  Avatar={Avatar} name='kuldeep' />
    </div>
  )
}

export default Header
