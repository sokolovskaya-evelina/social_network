import React from "react";
import {addMessageAC, updateNewMessageTextAC,} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

//TODO типизация

let mapStateToProps = (state: any) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessageTextAC(text))

        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)