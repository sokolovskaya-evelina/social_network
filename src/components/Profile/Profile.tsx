import React from 'react';
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer"
import {Spin} from "antd";


const Profile = (props: any) => {
    return (
        <Spin spinning={!props.profile} style={{background: '#fff', width: '100%', height: '100%'}}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </Spin>
    )
}

export default Profile