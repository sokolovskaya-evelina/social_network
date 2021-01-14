import React, {ChangeEvent, FC} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import {AllActionsTypes, postDataType, profilePageType} from "../../../redux/state";

type MyPostType = {
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    posts: Array<postDataType>
    newPostText: string
}

const MyPosts: FC<MyPostType> = (props) => {
    let postElements = props.posts.map(post => <Post massage={post.post} likeCount={post.likeCount}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPostText = e.currentTarget.value
        props.updateNewPostText(newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;