import React from 'react';
import MyPostsContainer from "./My posts/MyPostsContainer"
import {Spin} from "antd";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props: any) => {
    return (
        <Spin spinning={!props.profile} style={{background: '#fff', width: '100%', height: '100%'}}>
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