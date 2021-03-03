import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getProfilePage} from "../../redux/profile_reducer";
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
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfilePage}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

