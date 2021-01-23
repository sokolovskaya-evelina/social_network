import React from 'react';
import s from './Post.module.css';

type MessageType = {
    massage: string,
    likeCount: number
}

//TODO сделать отступы между постами

const Post: React.FC<MessageType> = (props) => {
    return (
            <div className={s.post}>
                <div className={s.postHeader}>
                    <div className={s.user}>
                        <img src={'https://static10.tgstat.ru/channels/_0/34/340648ab5ac20fe131ac165c13a6c5d5.jpg'}
                             className={s.userAvatar}/>
                        <div className={s.postInfo}>
                            <a href="#" className={s.postAuthor}>Alisa Grey</a>
                            <div className={s.postTimeInfo}>
                                <span className={s.postTime}>3 hrs</span>
                                <span className={"fas fa-cog" + ' ' + s.settingIcon}/>
                            </div>
                        </div>
                    </div>
                    <button className={'fas fa-ellipsis-h' + ' ' + s.postButton}/>
                </div>
                <div className={s.postContainer}>
                    <p className={s.postText}>{props.massage}</p>
                </div>
                <div className={"far fa-thumbs-up"+' '+s.likes}>
                    <span className={s.likesCounter}>{props.likeCount}</span>
                </div>
                <div className={s.postFooter}>
                    <button className={s.postButton}><i className={"far fa-thumbs-up" + " "+ s.buttonIcon} />Like</button>
                    <button className={s.postButton}><i className={"far fa-comment" + " "+ s.buttonIcon} />Comment</button>
                    <button className={s.postButton}><i className={"fas fa-share-alt" + " "+ s.buttonIcon} />Share</button>
                </div>
            </div>
    )
}

export default Post;