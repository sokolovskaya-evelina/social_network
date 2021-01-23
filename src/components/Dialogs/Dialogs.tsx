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

//TODO верстка
//TODO типизация

export const DialogItem = (props: DialogItemType) => {

    let path = "/dialogs/" + props.id
    return (
        <div className={s.item}>
            <div className="img">
                <NavLink to={path}><img src={'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'} alt='avatar' className={s.storyItem}/></NavLink>
            </div>
            <div className="text">
                <NavLink className={s.storyItem} to={path}>{props.name}</NavLink>
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
            <div className={s.text}>
                <div className={s.message}>{props.message}</div>
            </div>
        </div>
    )
}


interface Dialogs {
    updateNewMessage: (text: string) => void
    addMessage: () => void
    dialogsPage: dialogsPageType
    newMessageText: string
}

const Dialogs: FC<any> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map((names: any) =>
        <DialogItem id={names.id.toString()} name={names.name} key={names.id}/>
    )

    let messageElements = state.messageData.map((messages: any) =>
        <Message id={messages.id.toString()} message={messages.message} key={messages.id}/>
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
                <div className={s.messages_items}>
                    {messageElements}
                    <div className={s.add}>
                        <textarea className={s.textarea} onChange={onMessageChange} value={props.newMessageText}/>
                        <button className={"far fa-paper-plane" + " " + s.addMessageBtn} onClick={addMessage}/>
                    </div>
                </div>
                <div className={s.dialog_items}>
                    <h4 className={s.storiesTitle}>Friends</h4>
                    {dialogsElements}
                </div>
            </div>


        </div>
    )

}

export default Dialogs