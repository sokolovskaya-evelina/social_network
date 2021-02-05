import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer"


const Profile = (props: any) => {
    return (
        <div className={s.mainFeed}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile