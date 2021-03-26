import {profileAPI, ResultCodeEnum} from "../api/api";
import {Dispatch} from "redux";
import {GetStateType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
type initialStateType = typeof initialState
type DispatchType = Dispatch<ActionsTypes>


let initialState = {
    posts: [
        {id: 1, likeCount: 5, post: 'Hi! How are you?'},
        {id: 2, likeCount: 15, post: 'I learn React!)))'},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}


const ProfileReducer = (state = initialState, action: ActionsTypes):initialStateType => {
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

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export const getProfilePage = (userId: number) => (dispatch: DispatchType, getState: GetStateType) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response))
        })
}
export const getStatus = (userId: number) => (dispatch: DispatchType, getState: GetStateType) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response))
        })
}
export const updateStatus = (status: string) => (dispatch: DispatchType, getState: GetStateType) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.resultCode === ResultCodeEnum.Success) {
                dispatch(setStatus(status))
            }
        })
}

export default ProfileReducer

