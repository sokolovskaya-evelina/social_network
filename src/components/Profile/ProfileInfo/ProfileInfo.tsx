import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {ContactsType, ProfileType} from "../../../types/types";
import {Avatar, Button, Card, Image, Spin} from "antd";
import {Content} from "antd/es/layout/layout";
import {UserOutlined} from "@ant-design/icons";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

export type ProfileInfoPropsType = {
    profile: ProfileType | null
    isOwner: boolean
    status: string
    savePhoto: (photo: File) => Promise<any>
    updateStatus: (status: string) => void
    saveProfile: (formData: ProfileType) => Promise<any>
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

const ProfileInfo: React.FC<ProfileInfoPropsType> =
    ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
        const [editMode, setEditMode] = useState<boolean>(false)
        if (!profile) {
            return <Spin/>
        }

        const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.length) {
                savePhoto(e.target.files[0])
            }
        }
        const onSubmit = (formData: any) => {
            saveProfile(formData).then(
                () => {
                    setEditMode(false)
                })
        }

        return (
            <Card style={styles.cardStyle}>
                <Content style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {profile.photos.large
                        ? <Image style={styles.userAvatar} height={'100%'} src={profile.photos.large}/>
                        : <Avatar size={64} icon={<UserOutlined/>}/>}
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                    <ProfileStatusWithHooks profile={profile} status={status}
                                            updateStatus={updateStatus}/>
                    {editMode
                        ? <ProfileDataForm initialValues={profile}
                                           onSubmit={onSubmit}
                                           profile={profile}
                        />
                        : <ProfileData profile={profile}
                                       isOwner={isOwner}
                                       goToEditMode={() => setEditMode(true)}/>}
                </Content>
            </Card>
        )
    }


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.description}>
                    <span className={s.descriptionTextName}>
                        <b>{profile.fullName}</b>
                    </span>

            <span className={s.descriptionText}>
                        <b>Looking for a job:</b>
                {profile.lookingForAJob ? 'yes' : 'no'}
                    </span>
            <span className={s.descriptionText}>
                        <b>My professional skills:</b>
                {profile.lookingForAJobDescription}
                    </span>
            <span className={s.descriptionText}>
                        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key}
                                contactValue={profile.contacts[key as keyof ContactsType]}/>
            })}
                    </span>
            {isOwner && <Button htmlType={'button'} type={'primary'} onClick={goToEditMode}>Edit</Button>}
        </div>
    )
}

type ContactType = {
    contactTitle: string
    contactValue: string
}
const Contact: React.FC<ContactType> = ({contactTitle, contactValue}) => {
    return (<div className={s.descriptionTextContacts}>
            <b>{contactTitle}: </b>{contactValue ? contactValue : <i>not specified</i>}</div>
    )
}

export default ProfileInfo;


//TODO: сделать отрисовку иконок

// <span className={s.descriptionTextContacts}>
//                         <b><i className="fab fa-facebook-f">:</i></b>
//     {profile.contacts.facebook ? profile.contacts.facebook : 'not specified'}
//                     </span>
// <span className={s.descriptionTextContacts}>
//                         <b><i className="fab fa-linkedin">:</i></b>{
//     profile.contacts.website ? profile.contacts.website : 'not specified'}
//                     </span>
// <span className={s.descriptionTextContacts}>
//                         <b><i className="fab fa-vk">:</i></b>
//     {profile.contacts.vk ? profile.contacts.vk : 'not specified'}
//                     </span>
// <span className={s.descriptionTextContacts}>
//                         <b><i className="fab fa-twitter">:</i></b>
//     {profile.contacts.instagram ? profile.contacts.instagram : 'not specified'}
//                     </span>
// <span className={s.descriptionTextContacts}>
//                         <b><i className="fab fa-instagram">:</i></b>
//     {profile.contacts.instagram ? profile.contacts.instagram : 'not specified'}
//                     </span>
// <span className={s.descriptionTextContacts}>
//                         <b><i className="fab fa-youtube">:</i></b>
//     {profile.contacts.youtube ? profile.contacts.youtube : 'not specified'}
//                     </span>
// <span className={s.descriptionTextContacts}>
//                         <b><i className="fab fa-github">:</i></b>
//     {profile.contacts.github ? profile.contacts.github : 'not specified'}
//                     </span>
// <span className={s.descriptionTextContacts}>
//                         <b><i className="fas fa-link">:</i></b>
//     {profile.contacts.mainLink ? profile.contacts.mainLink : 'not specified'}
//                     </span>