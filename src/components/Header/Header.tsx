import React from 'react';
import {NavLink} from 'react-router-dom';
import {Button} from "antd";
import style from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {reduxStoreType} from "../../redux/redux_store";
import {logoutUser} from "../../redux/auth_reducer";
import userAvatar from './../../assets/user.png'

export type HeaderPropsType = {
    login: string,
    isAuth: boolean,
    logoutUser: () => void
}

const HeaderComponent: React.FC = () => {
    const isAuth = useSelector<reduxStoreType, boolean>(state => state.auth.isAuth)
    const userPhoto = useSelector<reduxStoreType, string | null | undefined>(state => state.profilePage.profile?.photos.small)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutUser())
    }

    return (
        <>
            {isAuth
                ? <div>
                    <img src={userPhoto || userAvatar} alt='user avatar' className={style.userPhoto}/>
                    <Button type='primary'
                            onClick={logout}>
                        Logout
                    </Button>
                </div>
                :
                <NavLink to={'/login'}>
                    <Button type='primary'>

                        Login
                    </Button>
                </NavLink>

            }
        </>
    )
}

export default HeaderComponent;

