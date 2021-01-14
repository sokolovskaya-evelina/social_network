import React, {ChangeEvent, FC} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {reduxStoreType} from "../../../redux/redux_store";

//TODO затипизировать store, приходящий в пропсах

type MyPostsContainerType = {
    store: any
}

const MyPostsContainer: FC<MyPostsContainerType> = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (newPostText: string) => {
        let action = updateNewPostTextActionCreator(newPostText)
        props.store.dispatch(action)
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange} posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;