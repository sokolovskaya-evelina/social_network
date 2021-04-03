import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from "antd";

export type HeaderPropsType = {
    login: string,
    isAuth: boolean,
    logoutUser: () => void
}

//TODO сделать иконки на панели навигации
export const Header: React.FC<any> = (props) => {
    return (<>
            {props.isAuth ?
                <span>{props.login} <Button type='primary' onClick={props.logoutUser}>Logout</Button></span>
                : <NavLink to={'/login'}><Button type='primary' onClick={props.logoutUser}>Login</Button></NavLink>}
        </>
    )
}

export default Header;

