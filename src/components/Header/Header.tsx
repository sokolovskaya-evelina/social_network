import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType={
    login: string,
    isAuth: boolean,
    logout: ()=>void
}

//TODO сделать иконки на панели навигации
export const Header: React.FC<any> = (props) => {

    return (
        <header className={s.header}>
            <form className={s.searchForm}>
                <input className={s.searchInput} type="text" placeholder="Search"/>
                <button className={"fas fa-search" + " " + s.searchButton} type="submit"/>
            </form>
            <nav className={s.navigation}>
                <div className={s.user}>
                    <img src={'https://static10.tgstat.ru/channels/_0/34/340648ab5ac20fe131ac165c13a6c5d5.jpg'}
                         alt="avatar" className={s.userAvatar}/>
                    {props.isAuth ?
                        <span className={s.userName}>{props.login} <button onClick={props.logout}>Logout</button></span>  : <NavLink to={'/login'}>Login</NavLink>}

                </div>
            </nav>
        </header>
    )
}

export default Header;

