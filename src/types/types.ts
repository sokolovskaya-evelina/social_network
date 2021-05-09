import {reduxStoreType} from "../redux/redux_store";

export type GetStateType = () => reduxStoreType

export type PostType = {
    id: string,
    post: string,
    likeCount: number
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>
    newMessageText?: string
}
export type dialogsDataType = {
    id: number
    name: string
}
export type messageDataType = {
    id: number
    message: string
}


/*export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type profilePageType = {
    posts: Array<postDataType>
    newPostText: string
}*/

export type postDataType = {
    id: string
    post: string
    likeCount: number
}
