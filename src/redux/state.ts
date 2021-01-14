import ProfileReducer, {ProfileActionsTypes,} from "./profile_reducer";
import DialogsReducer, {DialogsActionsTypes,} from "./dialogs_reducer";


export type storeType = {
    _state: stateType
    _rerenderEntireTree: any
    subscribe: (observer: () => void) => void
    getState: () => stateType
    dispatch: (action: AllActionsTypes) => void
}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType

}
export type profilePageType = {
    posts: Array<postDataType>
    newPostText: string
}
export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messageData: Array<messageDataType>
    newMessageText: string
}
export type postDataType = {
    id: number
    post: string
    likeCount: number
}
export type dialogsDataType = {
    id: number
    name: string
}
export type messageDataType = {
    id: number
    message: string
}

export type AllActionsTypes = ProfileActionsTypes | DialogsActionsTypes


let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likeCount: 5, post: 'Hi! How are you?'},
                {id: 2, likeCount: 15, post: 'I learn React!)))'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Katya'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Eva'},
                {id: 4, name: 'Alisa'},
                {id: 5, name: 'Ivan'},
                {id: 6, name: 'Roma'},
            ],
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Fine. And you?'},
                {id: 5, message: 'Good. Thanks'}
            ],
            newMessageText: ''
        },
    },
    _rerenderEntireTree() {
        console.log('hello')
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree()
    }
}


export default store