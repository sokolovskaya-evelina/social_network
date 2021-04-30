import {ContactsType, ProfileType} from "../../../types/types";
import React from "react";
import s from "./ProfileInfo.module.css";
import {Button} from "antd";

type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}
export const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.data__description}>
            <div className={s.data__description_full_name}>
                <b>{profile.fullName}</b>
            </div>
            <div className={s.descriptionText}>
                        <b>Looking for a job: </b>
                {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div className={s.descriptionText}>
                        <b>My professional skills: </b>
                {profile.lookingForAJobDescription}
            </div>
            <div className={s.descriptionText}>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key}
                                contactValue={profile.contacts[key as keyof ContactsType]}/>})}
            </div>
            {isOwner && <Button className={s.edit_btn} htmlType={'button'} type={'primary'} onClick={goToEditMode}>Edit</Button>}
        </div>
    )
}

type ContactType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.descriptionTextContacts}>
            <b>{contactTitle}: </b>{contactValue ? contactValue : <i>not specified</i>}
        </div>
    )
}