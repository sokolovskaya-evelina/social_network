import axios from "axios";
import {PhotosType, ProfileType, UserType} from "../types/types";

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type LoginMeResponseType = {
    resultCode: ResultCodeEnum | ResultCodeForCaptcha
    messages: Array<string>
    data: {
        userId: number
    }
}
type commonResponseType<P = {}> = {
    data: P
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type UserResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

type SavePhotoResponseDataType = {
    photos: PhotosType
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fe3cd028-48b8-4f24-aace-482e17e6fa4c"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(id: number = 2) {
        return instance.post<commonResponseType>(`follow/${id}`)
    },
    unfollow(id: number = 2) {
        return instance.delete<commonResponseType<SavePhotoResponseDataType>>(`follow/${id}`)
    },
}

export const profileAPI = {
    getProfile(userId: number = 2) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<commonResponseType>(`profile/status`, {status: status})
            .then(res => res.data)
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<commonResponseType<PhotosType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put <commonResponseType>(`profile`, profile)
            .then(res => res.data)
    }
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<LoginMeResponseType>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logout() {
        return instance.delete<LoginMeResponseType>(`auth/login`)
            .then(res => res.data)
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<{ url: string }>('/security/get-captcha-url')
    }
}

