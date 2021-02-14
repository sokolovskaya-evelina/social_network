const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

//TODO типизация

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

const UsersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
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

export const followAC = (userID: number) => ({
        type: FOLLOW,
        userID
    } as const
)

export const unFollowAC = (userID: number) => ({
        type: UNFOLLOW,
        userID
    } as const
)

export const setUsersAC = (users: any) => ({
        type: SET_USERS,
        users
    } as const
)
export const setCurrentPagesAC = (currentPage: number) => ({
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    } as const
)
export const toggleIsFetching = (isFetching: boolean) => ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
)
export const toggleIsFollowingProgressAC = (isFetching: boolean, userID: number) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userID
    } as const
)


export default UsersReducer