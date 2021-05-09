import {profileAPI, ResultCodeEnum} from "../api/api";
import {Dispatch} from "redux";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunkType} from "./redux_store";
import {FormAction, stopSubmit} from "redux-form";
import {v1} from 'uuid';

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_STATUS = "profile/SET-STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE-PHOTO-SUCCESS";
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PROFILE_SUCCESS = 'profile/SAVE_PROFILE_SUCCESS'

export type ActionsTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof saveProfileSuccess>
    | ReturnType<typeof deletePost>
type initialStateType = typeof initialState
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>

let initialState = {
    posts: [
        {id: '1', likeCount: 5, post: 'Hi! How are you?'},
        {id: '2', likeCount: 15, post: 'I learn React!)))'},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}


const ProfileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: v1(),
                post: action.newPostText,
                likeCount: 0
            }
            return {...state, posts: [newPost, ...state.posts,]}
        }
        case DELETE_POST:
            return {...state, posts: [...state.posts.filter(p => p.id !== action.id)]}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const deletePost = (id: string) => ({type: DELETE_POST, id} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)
export const saveProfileSuccess = (profile: ProfileType) => ({type: SAVE_PROFILE_SUCCESS, profile} as const)

export const getProfilePage = (userId: number) => async (dispatch: Dispatch<ActionsTypes>) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}
export const getStatus = (userId: number) => async (dispatch: DispatchType) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}
export const updateStatus = (status: string) => async (dispatch: DispatchType) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.resultCode === ResultCodeEnum.Success) {
            dispatch(setStatus(status))
        }
    } catch (error) {

    }

}
export const savePhoto = (file: File) => async (dispatch: DispatchType) => {
    const response = await profileAPI.savePhoto(file)
    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(savePhotoSuccess(response.data))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)

    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getProfilePage(userId))
        } else {
            throw new Error("userId can't be null")
        }
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export default ProfileReducer

