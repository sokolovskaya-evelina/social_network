const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

//TODO типизация

let initialState = {
    users: [],
}

const UsersReducer = (state:any = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u:any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u:any) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
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


export default UsersReducer