import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfileType} from "../../../../types/types";
import avatar from "../../../../assets/avatar.png";

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.mainFeed}>
            <div className={s.descriptionBlock}>
                <img className={s.profileImage}
                     src={props.profile.photos.large ? props.profile.photos.large : avatar}/>
                <div className={s.description}>
                    <span className={s.descriptionTextName}><b>{props.profile.fullName}</b></span>
                    <ProfileStatus profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                    {/*<span className={s.descriptionText}><b>About me:</b> <i>{props.profile.}</i></span>*/}
                    <span
                        className={s.descriptionText}><b>Looking for a job:</b>{props.profile.lookingForAJob ? 'yes' : 'no'}</span>
                    <span
                        className={s.descriptionText}><b>Looking for a job description:</b>{props.profile.lookingForAJobDescription}</span>
                    <span className={s.descriptionText}><b>Contacts:</b></span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-facebook-f">:</i></b>{props.profile.contacts.facebook ? props.profile.contacts.facebook : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-linkedin">:</i></b>{props.profile.contacts.website ? props.profile.contacts.website : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-vk">:</i></b>{props.profile.contacts.vk ? props.profile.contacts.vk : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-twitter">:</i></b>{props.profile.contacts.instagram ? props.profile.contacts.instagram : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-instagram">:</i></b>{props.profile.contacts.instagram ? props.profile.contacts.instagram : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-youtube">:</i></b>{props.profile.contacts.youtube ? props.profile.contacts.youtube : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-github">:</i></b>{props.profile.contacts.github ? props.profile.contacts.github : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fas fa-link">:</i></b>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : 'not specified'}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;