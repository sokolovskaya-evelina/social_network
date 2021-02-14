import ProfileReducer, {
    addPostActionCreator,
    setUserProfile,
    updateNewPostTextActionCreator
} from "../redux/profile_reducer";

let startState: any = {}

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, likeCount: 5, post: 'Hi! How are you?'},
            {id: 2, likeCount: 15, post: 'I learn React!)))'},
        ],
        newPostText: '',
        profile: null,
    }
})

test('post should be added', () => {
    const action = addPostActionCreator()
    const endState = ProfileReducer(startState, action)

    expect(endState.posts.length).toBe(3)
})

test('new post text should be update', () => {
    const action = updateNewPostTextActionCreator('hello world')
    const endState = ProfileReducer(startState, action)

    expect(endState.newPostText).toBe('hello world')
})

test('user profile should be set', () => {
    const action = setUserProfile('111')
    const endState = ProfileReducer(startState, action)

    expect(endState.profile).toBe('111')
})

