import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

//TODO типизация

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const AuthReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: SET_USER_DATA,
        payload: {userId, email, login,isAuth}
    }
)

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export default AuthReducer