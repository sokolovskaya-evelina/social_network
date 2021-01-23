import React from 'react';
import {connect} from 'react-redux';
import Users from "./Users";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users_reducer";

//TODO сделать типизацию

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer