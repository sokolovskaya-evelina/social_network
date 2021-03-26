import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {ProfileType} from "../../../../types/types";

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={s.mainFeed}>
        <div className={s.descriptionBlock}>
            <ProfileStatus profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        </div>

    </div>
}

export default ProfileInfo;