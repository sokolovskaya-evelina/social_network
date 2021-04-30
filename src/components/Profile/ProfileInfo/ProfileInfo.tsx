import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../types/types";
import {Button, Card, Image, Spin} from "antd";
import {Content} from "antd/es/layout/layout";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {ProfileData} from "./ProfileData";
import userAvatar from './../../../assets/user.png'
import {UploadOutlined} from "@ant-design/icons";

export type ProfileInfoPropsType = {
    profile: ProfileType | null
    isOwner: boolean
    status: string
    savePhoto: (photo: File) => void
    updateStatus: (status: string) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}

const styles = {
    cardStyle: {
        width: '100%',
        marginBottom: '20px'
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
                <Content className={s.profile__container}>
                    <div className={s.profile__photo_block}>
                        {profile.photos.large
                            ? <Image className={s.profileImage} src={profile.photos.large}/>
                            : <Image className={s.profileImage} src={userAvatar}/>}
                        <ProfileStatusWithHooks profile={profile} status={status}
                                                updateStatus={updateStatus}/>
                        {isOwner && <Button type={'primary'} className={s.upload_btn}>
                            <label className={s.custom_file_upload}>
                                <UploadOutlined/>
                                <input type={'file'} className={s.input_file} onChange={onMainPhotoSelected}/>
                                Upload photo
                            </label>
                        </Button>
                        }
                    </div>
                    <div>

                        {editMode
                            ? <ProfileDataForm initialValues={profile}
                                               onSubmit={onSubmit}
                                               profile={profile}
                            />
                            : <ProfileData profile={profile}
                                           isOwner={isOwner}
                                           goToEditMode={() => setEditMode(true)}/>}
                    </div>
                </Content>
            </Card>
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