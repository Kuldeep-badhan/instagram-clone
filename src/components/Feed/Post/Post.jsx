import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {FiMessageCircle} from 'react-icons/fi'
import {TbSend} from 'react-icons/tb'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import './Post.scss'

const Post = ({displayName, Avatar, postImgUrl , postDescription }) => {
  return (
    <div className='post'>
      <div className="post_header">
      <div className="post_header_userdata">
        <Avatar/>
        <strong>@{displayName}</strong>
      </div>
      {/* three dot icon */}
      <MoreHorizIcon className='three_dot_icon' />
      </div>
      <div className="post_body">
        <img src={postImgUrl} alt="post image" width={'100%'}/>
        <div className="post_body_icons">
            {/* icons */}
            <div className="post_body_icons_left">
                <FavoriteBorderIcon className='fav_icon'/>
                <FiMessageCircle className='message_icon' />
                <TbSend className='send_icon'/>
            </div>
            <div className="post_body_icons_right">
                <BookmarkBorderOutlinedIcon className='bookmark_icon' />
            </div>
        </div>
        <div className="post_body_description">
            <strong>@{displayName}</strong>
            {postDescription}
        </div>
      </div>
    </div>
  )
}

export default Post
