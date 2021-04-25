import UsersReducer, {
    followSuccess,
    setCurrentPages,
    setTotalUsersCount,
    toggleInFetching,
    unFollowSuccess,
    userInitialStateType
} from "../redux/users_reducer";

let startState = {} as userInitialStateType
beforeEach(() => {
    startState = {
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [],
        users: [
            {
                id: 1,
                name: 'string',
                status: 'string',
                photos: {
                    small: 'xl',
                    large: null
                },
                followed: false
            }
        ]
    }
})

test('current page should be update', () => {
    const action = setCurrentPages(5)
    const endState = UsersReducer(startState, action)

    expect(endState.currentPage).toBe(5)
})

test('total users count should be update', () => {
    const action = setTotalUsersCount(10)
    const endState = UsersReducer(startState, action)

    expect(endState.totalUsersCount).toBe(10)
})

test('toggle is fetching should be update', () => {
    const action = toggleInFetching(false)
    const endState = UsersReducer(startState, action)

    expect(endState.isFetching).toBeFalsy()
})

//TODO спросить про эти тесты
test('follow should be true', () => {
    const action = followSuccess(1)
    const endState = UsersReducer(startState, action)

    expect(endState.users[0].followed).toBeTruthy()
})

test('follow should be false', () => {
    const action = unFollowSuccess(1)
    const endState = UsersReducer(startState, action)

    expect(endState.users[0].followed).toBeFalsy()
})


