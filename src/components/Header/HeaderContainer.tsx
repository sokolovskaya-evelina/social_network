import React from 'react';
import Header, {HeaderPropsType} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logoutUser} from "../../redux/auth_reducer";
import {reduxStoreType} from "../../redux/redux_store";

type MapPropsType = {

}
//TODO типизация
class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserData()

    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: reduxStoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthUserData, logoutUser})(HeaderContainer);