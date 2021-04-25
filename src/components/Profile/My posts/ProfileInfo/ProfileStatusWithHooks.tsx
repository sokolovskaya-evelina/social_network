import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {ProfileInfoPropsType} from "./ProfileInfo";
import {Input} from "antd";

const ProfileStatusWithHooks = (props: ProfileInfoPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <div>
            <div className={s.description}>
                <div>
                    {!editMode &&
                    <span onDoubleClick={activateEditMode} className={s.status}>
                            {props.status
                                ? props.status
                                : 'Изменить статус'}
                        </span>}
                    {editMode &&
                    <Input onChange={onStatusChange}
                           autoFocus={true}
                           onBlur={deactivateEditMode}
                           type="text"
                           value={status}/>}
                </div>
            </div>
        </div>
    )
}

export default ProfileStatusWithHooks;