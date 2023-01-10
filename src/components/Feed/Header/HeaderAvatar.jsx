import React from 'react'

import './HeaderAvatar.scss'

const HeaderAvatar = ({Avatar, name }) => {
  return (
    <div className='header_avatar' >
      <Avatar className='header_avatar_icon' />
      <p  className='header_avatar_text' >{name}</p>
    </div>
  )
}

export default HeaderAvatar
