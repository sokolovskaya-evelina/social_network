import {authAPI, ResultCodeEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
}

type initialStateType = typeof initialState
type ActionTypes =
    | ReturnType<typeof setAuthUserData>

const AuthReducer = (state = initialState, action: ActionTypes): initialStateType => {
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
        payload: {userId, email, login, isAuth}
    } as const
)

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me()

    if (response.resultCode === ResultCodeEnum.Success) {
        let {id, email, login} = response.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const logoutUser = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()

    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    } else {
        let message = response.messages.length > 0 ? response.messages[0] : 'Some Error'
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const loginUser = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    let response = await authAPI.login(email, password, rememberMe)

    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(getAuthUserData())
    }
}

export default AuthReducer