import React from 'react';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPagesAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetching, toggleIsFollowingProgressAC,
    unFollowAC
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from '../../api/api';

//TODO сделать типизацию

class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.toggleInFetching(true)
        usersAPI.getUsers(this.props.currentValue, this.props.pageSize).then(data => {
                this.props.toggleInFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPages(pageNumber)
        this.props.toggleInFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleInFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unFollow}
                   toggleInFollowingProgress={this.props.toggleInFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default connect(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPagesAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleInFetching: toggleIsFetching,
    toggleInFollowingProgress: toggleIsFollowingProgressAC
})(UsersContainer);
