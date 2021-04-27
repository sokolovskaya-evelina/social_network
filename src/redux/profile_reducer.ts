import {profileAPI, ResultCodeEnum} from "../api/api";
import {Dispatch} from "redux";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = "profile/SET-USER-PROFILE";
const SET_STATUS = "profile/SET-STATUS";
const SAVE_PHOTO_SUCCESS = "profile/SAVE-PHOTO-SUCCESS";
const DELETE_POST = 'profile/DELETE_POST'

export type ActionsTypes =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof deletePost>
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


const ProfileReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
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
            debugger
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const deletePost = (id: number) => ({type: DELETE_POST, id} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

export const getProfilePage = (userId: number) => async (dispatch: DispatchType) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response))
}
export const getStatus = (userId: number) => async (dispatch: DispatchType) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}
export const updateStatus = (status: string) => async (dispatch: DispatchType) => {
    let response = await profileAPI.updateStatus(status)
    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file: File) => async (dispatch: DispatchType) => {
    let response = await profileAPI.savePhoto(file)
    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(savePhotoSuccess(response.data))
    }
}

export default ProfileReducer

