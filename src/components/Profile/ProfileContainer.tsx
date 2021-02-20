import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {getProfilePage} from "../../redux/profile_reducer";
import {withRouter} from 'react-router-dom';

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
    profile: state.profilePage.profile
})

let WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfilePage})(WithUrlDataComponent);