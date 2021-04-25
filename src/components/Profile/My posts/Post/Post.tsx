import React from 'react';
import s from './Post.module.css';
import {Avatar, Button, Card} from "antd";
import {CloseOutlined, CommentOutlined, LikeOutlined, ShareAltOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";


type MessageType = {
    massage: string
    likeCount: number
    deletePost: (id: number) => void
    id: number
}

const buttonStyle = {
    border: 'none',
    marginTop: '15px',
    fontSize: '14px',
}

const Post: React.FC<MessageType> = (props) => {
    let deletePost = () => {
        props.deletePost(props.id)
    }
    return (
        <Card style={{marginBottom: '15px', marginTop: '15px'}}>
            <div className={s.postHeader}>
                <div className={s.user}>
                    <Avatar className={s.userAvatar} size={'large'} icon={<UserOutlined/>}/>
                    <div className={s.postInfo}>
                        <NavLink to={'/profile'} className={s.postAuthor}>User</NavLink>
                    </div>
                </div>
                <Button htmlType={'button'} onClick={deletePost} style={buttonStyle} type={'dashed'}
                        icon={<CloseOutlined/>}/>
            </div>
            <div className={s.postContainer}>
                <p className={s.postText}>{props.massage}</p>
            </div>
            <div className={s.postFooter}>
                <Button style={buttonStyle} type={'default'}>{props.likeCount} Like <LikeOutlined/></Button>
                <Button style={buttonStyle} type={'default'} icon={<CommentOutlined/>}>Comment</Button>
                <Button style={buttonStyle} type={'default'} icon={<ShareAltOutlined/>}>Share</Button>
            </div>
        </Card>
    )
}

export default Post;