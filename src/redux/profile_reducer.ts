import state, {AllActionsTypes, postDataType, profilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type ProfileActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

let initialState = {
    posts: [
        {id: 1, likeCount: 5, post: 'Hi! How are you?'},
        {id: 2, likeCount: 15, post: 'I learn React!)))'},
    ],
    newPostText: ''
}


const ProfileReducer = (state: profilePageType = initialState, action: AllActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: postDataType = {
                id: 5,
                post: state.newPostText,
                likeCount: 0
            }

            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({
        type: ADD_POST
    } as const
)

export const updateNewPostTextActionCreator = (newText: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
)


export default ProfileReducer