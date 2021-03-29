import {reduxStoreType} from "./redux_store";

export const getUsersPages = (state: reduxStoreType) => {
    return state.usersPage.users
}
export const getPageSize = (state: reduxStoreType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: reduxStoreType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: reduxStoreType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: reduxStoreType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: reduxStoreType) => {
    return state.usersPage.followingInProgress
}