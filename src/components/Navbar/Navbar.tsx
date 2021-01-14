import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import home from "./../../img/home.png"
import message from "./../../img/messages.png"
import news from "./../../img/news.png"
import music from "./../../img/music.png"
import settings from "./../../img/settings.png"


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}><img src={home} alt="home"/></NavLink>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.active}><img src={message} alt="message"/></NavLink>
            <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active}><img src={news} alt="news"/></NavLink>
            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}><img src={music} alt="music"/></NavLink>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active}><img src={settings} alt="settings"/></NavLink>
            <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;