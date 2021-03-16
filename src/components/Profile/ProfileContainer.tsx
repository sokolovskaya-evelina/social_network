import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getProfilePage, getStatus, updateStatus} from "../../redux/profile_reducer";
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfilePage(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfilePage, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)
