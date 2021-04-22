import ProfileReducer, {addPostActionCreator, deletePost, setStatus, setUserProfile} from "../redux/profile_reducer";
import {PostType, ProfileType} from "../types/types";

let startState: any = {}

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, likeCount: 5, post: 'Hi! How are you?'},
            {id: 2, likeCount: 15, post: 'I learn React!)))'},
        ] as Array<PostType>,
        profile: null as ProfileType | null,
        status: ''
    }
})

const ProfileState = {
    userId: 1,
    lookingForAJob: false,
    lookingForAJobDescription: 'I want to be React developer',
    fullName: 'Evelina',
    contacts: {
        github: 'string',
        vk: 'string',
        facebook: 'string',
        instagram: 'string',
        twitter: 'string',
        website: 'string',
        youtube: 'string',
        mainLink: 'string',
    },
    photos: {
        large: '',
        small: ''
    }
}

test('new post should be added', () => {
    const action = addPostActionCreator('hello world')
    const endState = ProfileReducer(startState, action)

    expect(endState.posts[0].post).toBe('hello world')
})

test('status should be changed', () => {
    const action = setStatus('hello world')
    const endState = ProfileReducer(startState, action)

    expect(endState.status).toBe('hello world')
})

test('profile should be added', () => {
    const action = setUserProfile(ProfileState)
    const endState = ProfileReducer(startState, action)

    expect(endState.profile).toBe(ProfileState)
})

test('post should be deleted', () => {
    const action = deletePost(1)
    const endState = ProfileReducer(startState, action)

    expect(endState.posts[0].post).toBe('I learn React!)))')
})
