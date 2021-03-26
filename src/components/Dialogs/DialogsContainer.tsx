import React from "react";
import {addMessageAC,} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose, Dispatch} from "redux";
import {reduxStoreType} from "../../redux/redux_store";

//TODO типизация

let mapStateToProps = (state: reduxStoreType) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)