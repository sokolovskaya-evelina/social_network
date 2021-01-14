import React, {FC} from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";

//TODO затипизировать store, приходящий в пропсах

interface DialogsContainerType {
    store: any

}

export const DialogsContainer: FC<DialogsContainerType> = (props) => {
    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (<Dialogs updateNewMessage={onMessageChange} addMessage={addMessage} newMessageText={state.newMessageText}
                     dialogsPade={state}/>
    )

}