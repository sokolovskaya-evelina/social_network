import {Dispatch} from "redux";
import {getAuthUserData} from "./auth_reducer";
import {GetStateType} from "../types/types";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false,
}

type initialStateType = typeof initialState
type ActionTypes =
    | ReturnType<typeof initializedSuccess>

const appReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({
        type: INITIALIZED_SUCCESS,
    } as const
)

export const initializeApp = () => (dispatch: Dispatch<any>, getState: GetStateType) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(()=>{
            dispatch(initializedSuccess())
        })
}

export default appReducer