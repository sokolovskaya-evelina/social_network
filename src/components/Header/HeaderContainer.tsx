import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logoutUser} from "../../redux/auth_reducer";
import {reduxStoreType} from "../../redux/redux_store";

type MapPropsType = {}

//TODO типизация
class HeaderContainer extends React.Component<any, any> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: reduxStoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logoutUser})(HeaderContainer);