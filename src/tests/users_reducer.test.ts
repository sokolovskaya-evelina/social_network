import UsersReducer, {
    followSuccess,
    setCurrentPages,
    setTotalUsersCount,
    setUsers,
    toggleInFetching, toggleIsFollowingProgress, unFollowSuccess
} from "../redux/users_reducer";

let startState = {}
beforeEach(() => {
    startState = {
        users: [
            {userID: 2, followed: false},
            {userID: 3, followed: true}
        ],
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [],
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
/*test('follow should be true', () => {
    const action = followAC(0)
    const endState = UsersReducer(startState, action)

    expect(endState.users[0].followed).toBeTruthy()
})

test('follow should be false', () => {
    const action = unFollowAC(2)
    const endState = UsersReducer(startState, action)

    expect(endState.users[1].followed).toBe(false)
})*/
/*
test('user should be set', () => {
    const action = setUsersAC(1)
    const endState = UsersReducer(startState, action)

    expect(endState).not.toEqual(startState)
})

test('', () => {
    const action = toggleIsFollowingProgressAC(false, 5)
    const endState = UsersReducer(startState,action)

    expect(endState).not.toEqual(startState)
})*/


