const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

//TODO типизация

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
        default:
            return state
    }
}

export const follow = (userID: number) => ({
        type: FOLLOW,
        userID
    } as const
)

export const unFollow = (userID: number) => ({
        type: UNFOLLOW,
        userID
    } as const
)

export const setUsers = (users: any) => ({
        type: SET_USERS,
        users
    } as const
)
export const setCurrentPages = (currentPage: any) => ({
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
)
export const setTotalUsersCount = (totalUsersCount: any) => ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    } as const
)
export const toggleIsFetching = (isFetching: boolean) => ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
)


export default UsersReducer