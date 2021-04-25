import React from 'react';
import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPages, toggleIsFollowingProgress, unFollow,} from "../../redux/users_reducer";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {UserType} from "../../types/types";
import {reduxStoreType} from "../../redux/redux_store";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersPages
} from "../../redux/users-selectors";
import {Spin} from "antd";

type MapStatePropsType = {
    currentValue: number
    pageSize: number,
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    unFollow: (id: number) => void
    follow: (id: number) => void
    getUsers: (currentValue: number, pageSize: number) => void
}
type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        const {currentValue,pageSize} =this.props
        this.props.getUsers(currentValue, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            <Spin spinning={this.props.isFetching}>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unFollow}
                    //toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            </Spin>
        </>

    }
}

//TODO спросить типизацию
let mapStateToProps = (state: reduxStoreType) => {
    return {
        users: getUsersPages(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    withAuthRedirect,
    connect/*<MapStatePropsType,MapDispatchPropsType, reduxStoreType>*/(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPages,
        toggleIsFollowingProgress,
        getUsers
    })
)(UsersContainer)
