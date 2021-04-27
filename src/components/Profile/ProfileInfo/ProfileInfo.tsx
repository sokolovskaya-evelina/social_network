import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../types/types";
import {Avatar, Card, Image, Spin} from "antd";
import {Content} from "antd/es/layout/layout";
import {UserOutlined} from "@ant-design/icons";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export type ProfileInfoPropsType = {
    profile: ProfileType | null
    isOwner: boolean
    status: string
    savePhoto: (photo: File) => Promise<any>
    updateStatus: (status: string) => void
}

const styles = {
    cardStyle: {
        width: '100%',
        marginBottom: '20px'
    },
    userAvatar: {
        minWidth: '100px',
        height: '100%'
    },
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Spin/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <Card style={styles.cardStyle}>
            <Content style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                {profile.photos.large
                    ? <Image style={styles.userAvatar} height={'100%'} src={profile.photos.large}/>
                    : <Avatar size={64} icon={<UserOutlined/>}/>}
                <div className={s.description}>
                    <span className={s.descriptionTextName}><b>{profile.fullName}</b></span>
                    <ProfileStatusWithHooks profile={profile} status={status}
                                            updateStatus={updateStatus}/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    <span
                        className={s.descriptionText}><b>Looking for a job:</b>{profile.lookingForAJob ? 'yes' : 'no'}</span>
                    <span
                        className={s.descriptionText}><b>Looking for a job description:</b>{profile.lookingForAJobDescription}</span>
                    <span className={s.descriptionText}><b>Contacts:</b></span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-facebook-f">:</i></b>{profile.contacts.facebook ? profile.contacts.facebook : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-linkedin">:</i></b>{profile.contacts.website ? profile.contacts.website : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-vk">:</i></b>{profile.contacts.vk ? profile.contacts.vk : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-twitter">:</i></b>{profile.contacts.instagram ? profile.contacts.instagram : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-instagram">:</i></b>{profile.contacts.instagram ? profile.contacts.instagram : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-youtube">:</i></b>{profile.contacts.youtube ? profile.contacts.youtube : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fab fa-github">:</i></b>{profile.contacts.github ? profile.contacts.github : 'not specified'}</span>
                    <span className={s.descriptionTextContacts}><b><i
                        className="fas fa-link">:</i></b>{profile.contacts.mainLink ? profile.contacts.mainLink : 'not specified'}</span>
                </div>
            </Content>
        </Card>
    )
}

export default ProfileInfo;