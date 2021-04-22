import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from "antd";

export type HeaderPropsType = {
    login: string,
    isAuth: boolean,
    logoutUser: () => void
}

export const Header: React.FC<any> = (props) => {
    return (
        <>
            {props.isAuth ?
                <span style={{fontWeight: 'bold'}}>{props.login} <Button style={{marginRight: '20px', marginLeft: '30px'}} type='primary' onClick={props.logoutUser}>Logout</Button></span>
                : <NavLink to={'/login'}><Button style={{marginRight: '20px'}} type='primary' onClick={props.logoutUser}>Login</Button></NavLink>}
        </>
    )
}

export default Header;

