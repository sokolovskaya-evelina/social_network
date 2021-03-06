import {dialogsDataType, messageDataType} from "../types/types";

const ADD_MESSAGE = "dialogs/ADD-MESSAGE";


export type ActionsTypes = ReturnType<typeof addMessageAC>
type initialStateType = typeof initialState

let initialState = {
    dialogsData: [
        {id: 1, name: 'Katya'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Eva'},
        {id: 4, name: 'Alisa'},
        {id: 5, name: 'Ivan'},
        {id: 6, name: 'Roma'},
    ] as Array<dialogsDataType>,
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Fine. And you?'},
        {id: 5, message: 'Good. Thanks'}
    ] as Array<messageDataType>,
}

const DialogsReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    let stateCopy
    switch (action.type) {
        case ADD_MESSAGE:
            stateCopy = {
                ...state,
                messageData: [...state.messageData, {
                    id: 7,
                    message: action.newMessageText
                }],
            }
            return stateCopy
        default:
            return state

    }
}

export const addMessageAC = (newMessageText: string) => ({type: ADD_MESSAGE, newMessageText} as const)

export default DialogsReducer