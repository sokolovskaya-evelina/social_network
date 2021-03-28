import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getProfilePage, getStatus, updateStatus} from "../../redux/profile_reducer";
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {reduxStoreType} from "../../redux/redux_store";


//TODO Спросить про захардкодженное значение
class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 5676
        }
        this.props.getProfilePage(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}

            />
        )
    }
}

let mapStateToProps = (state: reduxStoreType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUerId: state.auth.userId,
    isAuth: state.auth.isAuth

})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfilePage, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

