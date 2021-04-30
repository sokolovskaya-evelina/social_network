import React from 'react';
import MyPostsContainer from "./My posts/MyPostsContainer"
import {Spin} from "antd";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../types/types";
import s from './Profile.module.css'

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>
    savePhoto: (file: File) => void
}

const Profile = (props: PropsType) => {
    return (
        <Spin spinning={!props.profile} className={s.spin}>
            <ProfileInfo savePhoto={props.savePhoto}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}
            />
            <MyPostsContainer/>
        </Spin>
    )
}

export default Profile