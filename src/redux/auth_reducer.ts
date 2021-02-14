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

export const setAuthUserDataAC = (userId: number | null, email: string | null, login: string | null): any => ({
        type: SET_USER_DATA,
        data: {userId, email, login}
    } as const
)

export default AuthReducer