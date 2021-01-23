import React, {FC} from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator,} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//TODO типизация

let mapStateToProps =(state: any)=>{
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps =(dispatch: any)=>{
    return {
        updateNewMessage:(text: string)=>{
            dispatch(updateNewMessageTextActionCreator(text))

        },
        addMessage: ()=>{
            dispatch(addMessageActionCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
