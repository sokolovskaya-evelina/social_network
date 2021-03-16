import {AllActionsTypes} from "./state";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

export type ProfileActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

type initialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, likeCount: 5, post: 'Hi! How are you?'},
        {id: 2, likeCount: 15, post: 'I learn React!)))'},
    ],
    profile: null,
    status: ''
}


const ProfileReducer = (state: any = initialState, action: AllActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts,],
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state

    }
}

export const addPostActionCreator = (newPostText: string) => ({
        type: ADD_POST,
        newPostText
    } as const
)

export const setStatus = (status: string) => ({
        type: SET_STATUS,
        status
    } as const
)


export const setUserProfile = (profile: string) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export const getProfilePage = (userId: number) => (dispatch: any) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
}

export default ProfileReducer

