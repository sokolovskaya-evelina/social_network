import {AllActionsTypes, dialogsPageType, messageDataType} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export type DialogsActionsTypes =
    ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>

let initialState = {
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
}

const DialogsReducer = (state: dialogsPageType = initialState, action: AllActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: messageDataType = {
                id: 7,
                message: state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default:
            return state

    }
}


export const addMessageActionCreator = () => ({
        type: ADD_MESSAGE
    } as const
)

export const updateNewMessageTextActionCreator = (newMessage: string) => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: newMessage
    } as const
)


export default DialogsReducer