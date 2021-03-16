import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import avatar from './../../../../assets/avatar.png'

const ProfileInfo = (props: any) => {
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