import AuthReducer, {setAuthUserData} from "../redux/auth_reducer";

let startState: any = {}

beforeEach(() => {
    startState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
    }
})

test('user should be auth', () => {
    const action = setAuthUserData(1, 'sokolovskaya_evelina_2001@mail.ru', 'rn_lazuka',)
    const endState = AuthReducer(startState, action)

    expect(endState.isAuth).toBe(true)
})