import React, {ChangeEvent, FC} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {postDataType} from "../../../redux/state";

type MyPostType = {
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    posts: Array<postDataType>
    newPostText: string
}

//TODO сделать отступы между постами нормально

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
        <div className={s.createPost}>
            <div className={s.createPostHeader}>
                <h4 className={s.createPostTitle}>
                    Create Post
                </h4>
            </div>

            <div className={s.createPostBody}>

                <div className={s.createPostInput}>
                    <textarea className={s.createPostTextarea} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div className={s.createPostFooter}>
                    <button className={s.tag} onClick={onAddPost}>
                        <i className={"fas fa-location-arrow"+' '+s.tagIcon}/>
                        Add post</button>
                </div>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;