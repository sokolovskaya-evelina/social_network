import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {reduxStoreType} from "../../redux/redux_store";

interface IProfile {
    store: reduxStoreType
}

const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile