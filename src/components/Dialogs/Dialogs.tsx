import React, {ChangeEvent, FC} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import avatar from './../../img/ava.jpg'
import {dialogsPageType} from "../../redux/state";

type DialogItemType = {
    name: string
    id: string
}
type MessageType = {
    message: string
    id: string
}

export const DialogItem = (props: DialogItemType) => {

    let path = "/dialogs/" + props.id
    return (
        <div className={s.item}>
            <div className="img">
                <NavLink to={path}><img src={avatar} alt='avatar'/></NavLink>
            </div>
            <div className="text">
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}
const Message = (props: MessageType) => {
    return (
        <div className={s.item}>
            <div className="img">
                <img src={avatar} alt='avatar'/>
            </div>
            <div className="text">
                <div className={s.message}>{props.message}</div>
            </div>
        </div>
    )
}


interface Dialogs {
    updateNewMessage: (text:string)=>void
    addMessage: ()=>void
    dialogsPade: dialogsPageType
    newMessageText: string
}

export const Dialogs: FC<Dialogs> = (props) => {
    let state=props.dialogsPade

    let dialogsElements = state.dialogsData.map((names) =>
        <DialogItem id={names.id.toString()} name={names.name}/>
    )

    let messageElements = state.messageData.map((messages) =>
        <Message id={messages.id.toString()} message={messages.message}/>
    )


    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewMessage(text)
    }

    return (
        <div className={s.content}>
            <div className={s.dialog_wrapper}>
                <div className={s.dialog_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages_items}>
                    {messageElements}
                </div>
                <textarea onChange={onMessageChange} value={props.newMessageText}></textarea>
                <button className={s.add_message_btn} onClick={addMessage}>Add</button>
            </div>
        </div>
    )

}