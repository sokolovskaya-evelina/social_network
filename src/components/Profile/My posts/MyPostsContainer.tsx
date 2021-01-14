import React, {FC} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile_reducer";
import StoreContext from '../../../StoreContext';
import MyPosts from "./MyPosts";

//TODO затипизировать store, приходящий в пропсах

type MyPostsContainerType = {
    store: any
}

const MyPostsContainer/*: FC<MyPostsContainerType>*/ = () => {


    return (
        <StoreContext.Consumer>
            {(store: any) => {
                let state = store.getState()

                let addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (newPostText: string) => {
                    let action = updateNewPostTextActionCreator(newPostText)
                    store.dispatch(action)
                }
                return <MyPosts addPost={addPost}
                                updateNewPostText={onPostChange}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }

            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;