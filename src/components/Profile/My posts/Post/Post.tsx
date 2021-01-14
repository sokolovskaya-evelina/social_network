import React from 'react';
import s from './Post.module.css';

type MessageType = {
  massage: string,
  likeCount: number
}

const Post: React.FC<MessageType> = (props) => {
  return (
        <div className={s.item}>
          <img src={'https://thispersondoesnotexist.com/image'}/>
          {props.massage}
          <div>
            {props.likeCount} like
          </div>
        </div>

  )
}

export default Post;