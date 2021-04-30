import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";
import {Input} from "antd";
import {ProfileType} from "../../../types/types";

export type ProfileStatusPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
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
        <div className={s.status__description}>
            <b className={s.status__description__text}>Status:</b>
            {!editMode &&
            <i onDoubleClick={activateEditMode} className={s.status}>
                {props.status
                    ? props.status
                    : 'Изменить статус'}
            </i>}
            {editMode &&
            <Input onChange={onStatusChange}
                   autoFocus={true}
                   onBlur={deactivateEditMode}
                   type="text"
                   value={status}/>}
        </div>
    )
}

export default ProfileStatusWithHooks;