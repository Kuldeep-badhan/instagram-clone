import React from 'react'

import './Option.scss'

const Option = ({ Icon , text }) => {
  return (
    <div className='option'>
      <Icon className='option_icon'/>
      <span className='option_text' >{text}</span>
    </div>
  )
}

export default Option
