import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


//TODO типизация

let mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newPostText: string) => {
            dispatch(updateNewPostTextActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

