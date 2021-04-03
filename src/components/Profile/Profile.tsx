import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer"
import {Card, Col, Row} from "antd";


const Profile = (props: any) => {
    return (
        <>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </>
    )
}

export default Profile