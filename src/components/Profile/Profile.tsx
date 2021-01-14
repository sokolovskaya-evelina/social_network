import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {reduxStoreType} from "../../redux/redux_store";

interface IProfile {
    store: reduxStoreType
}

const Profile = (props: IProfile) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile