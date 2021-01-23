import {AllActionsTypes, profilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type ProfileActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

type initialStateType= typeof initialState

let initialState = {
    posts: [
        {id: 1, likeCount: 5, post: 'Hi! How are you?'},
        {id: 2, likeCount: 15, post: 'I learn React!)))'},
    ],
    newPostText: ''
}


const ProfileReducer = (state: profilePageType = initialState, action: AllActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost={
                id: 5,
                post: state.newPostText,
                likeCount: 0
            }
            return  {
                ...state,
                posts: [newPost,...state.posts, ],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state

    }
}

export const addPostActionCreator = () => ({
        type: ADD_POST
    } as const
)

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}


export default ProfileReducer

