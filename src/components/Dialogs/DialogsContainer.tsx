import React, {FC} from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogs_reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

//TODO затипизировать store, приходящий в пропсах

/*interface DialogsContainerType {
    store: any

}*/

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store: any) => {
                let state = store.getState().dialogsPage
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                let onMessageChange = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }

                return (
                    <Dialogs updateNewMessage={onMessageChange}
                             addMessage={addMessage}
                             newMessageText={state.newMessageText}
                             dialogsPade={state}/>
                )
            }}
        </StoreContext.Consumer>
    )

}