import axios from "axios";
import {ProfileType, UserType} from "../types/types";

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
type commonResponseType = {
    data: {}
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type UserResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
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
        return instance.delete<commonResponseType>(`follow/${id}`)
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
    }
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<LoginMeResponseType>(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete<LoginMeResponseType>(`auth/login`)
            .then(res => res.data)
    }
}

