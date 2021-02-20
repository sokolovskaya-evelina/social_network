import {authAPI, usersAPI} from "../api/api";
import {followSuccess, toggleIsFollowingProgress} from "./users_reducer";

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
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null) => ({
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
)

export const getAuthUserData = () => (dispatch: any) =>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

export default AuthReducer