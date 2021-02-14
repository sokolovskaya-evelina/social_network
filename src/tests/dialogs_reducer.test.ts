import DialogsReducer, {addMessageAC, updateNewMessageTextAC} from "../redux/dialogs_reducer";


let startState: any = {}

beforeEach(() => {
    startState = {
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
})

test('new message text should be defined', () => {
    const action = updateNewMessageTextAC('hello world')
    const endState = DialogsReducer(startState, action)

    expect(endState.newMessageText).toBe('hello world')
    expect(endState).toEqual({
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
        newMessageText: 'hello world'
    })
})

test('message should be added', () => {
    const action = addMessageAC()
    const endState = DialogsReducer(startState, action)

    expect(endState.messageData.length).toBe(6)
    expect(endState.dialogsData.length).toBe(6)
})