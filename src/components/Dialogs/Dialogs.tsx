import React, {FC} from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import avatar from './../../img/ava.jpg'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import Textarea from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {dialogsDataType, dialogsPageType, messageDataType} from "../../types/types";
import {Button} from "antd";
import {SendOutlined} from "@ant-design/icons";

type DialogItemType = {
    name: string
    id: string
}
type MessageType = {
    message: string
    id: string
}

//TODO верстка
export const DialogItem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.item}>
            <div className="img">
                <NavLink to={path}><img src={'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'}
                                        alt='avatar' className={s.storyItem}/></NavLink>
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


type Dialogs = {
    updateNewMessage: (text: string) => void
    addMessage: (newMessageText: string) => void
    dialogsPage: dialogsPageType
    newMessageText: string
}

const Dialogs: FC<Dialogs> = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogsData.map((names: dialogsDataType) =>
        <DialogItem id={names.id.toString()} name={names.name} key={names.id}/>
    )

    let messageElements = state.messageData.map((messages: messageDataType) =>
        <Message id={messages.id.toString()} message={messages.message} key={messages.id}/>
    )

    let addNewMessage = (values: AddMessageFormDataType) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className={s.content}>
            <div className={s.dialog_wrapper}>
                <div className={s.messages_items}>
                    {messageElements}
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
                <div className={s.dialog_items}>
                    <h4 className={s.storiesTitle}>Friends</h4>
                    {dialogsElements}
                </div>
            </div>
        </div>
    )
}

type AddMessageFormDataType = {
    newMessageText: string
}

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <form className={s.add} onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'newMessageText'}
                className={s.textarea}
                placeholder={'Enter your message'}
                validate={[required, maxLength100]}
            />
            <Button style={{marginLeft: '15px', marginTop: '10px'}}
                    type={"primary"} htmlType={"submit"}
                    icon={<SendOutlined/>}/>
        </form>
    );
};

const AddMessageReduxForm = reduxForm<AddMessageFormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs