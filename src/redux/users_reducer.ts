import {ResultCodeEnum, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {UserType} from "../types/types";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET_USERS'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

export type userInitialStateType = typeof initialState
export type DispatchType = Dispatch<ActionsTypes>
export type ActionsTypes =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPages>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleInFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}

const UsersReducer = (state = initialState, action: ActionsTypes): userInitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter((id: number) => id !== action.userID)
            }
        default:
            return state
    }
}

export const followSuccess = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowSuccess = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPages = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
} as const)
export const toggleInFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleIsFollowingProgress = (isFetching: boolean, userID: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID
} as const)

export const getUsers = (currentValue: number, pageSize: number) => async (dispatch: DispatchType) => {
    dispatch(toggleInFetching(true))
    dispatch(setCurrentPages(currentValue))
    let data = await usersAPI.getUsers(currentValue, pageSize)
    dispatch(toggleInFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))

}

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}
export const unFollow = (userId: number) => async (dispatch: DispatchType) => {
     await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unFollowSuccess)

}
export const follow = (userId: number) => async (dispatch: DispatchType) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess)
}

export default UsersReducer