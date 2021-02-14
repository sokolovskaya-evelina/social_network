import React, {FC} from "react";
import {addMessageAC, updateNewMessageTextAC,} from "../../redux/dialogs_reducer";
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
            dispatch(updateNewMessageTextAC(text))

        },
        addMessage: ()=>{
            dispatch(addMessageAC())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
