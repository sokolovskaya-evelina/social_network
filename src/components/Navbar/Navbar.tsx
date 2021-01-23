import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
            <div className={s.menuSidebar}>
                <div className={s.user}>
                    <img src={'https://static10.tgstat.ru/channels/_0/34/340648ab5ac20fe131ac165c13a6c5d5.jpg'} alt="avatar" className={s.userAvatar}/>
                        <span className={s.userName}>Alisa Grey</span>
                </div>
                <nav className={s.navGroup}>
                        <NavLink to='/profile' className={s.navLink} activeClassName={s.active}>
                            <span className={"fas fa-home"+' '+s.navIcon}/>
                            <span className={s.navText}>Profile</span>
                        </NavLink>
                        <NavLink to='/dialogs' className={s.navLink} activeClassName={s.active}>
                            <span className={"fas fa-comment"+' '+s.navIcon}/>
                            <span className={s.navText}>Messages</span>
                        </NavLink>
                        <NavLink to='/users' className={s.navLink} activeClassName={s.active}>
                            <span className={"fas fa-user-friends"+' '+s.navIcon}/>
                            <span className={s.navText}>Users</span>
                        </NavLink>
                        <NavLink to='/news' className={s.navLink} activeClassName={s.active}>
                            <span className={"fas fa-newspaper"+' '+s.navIcon}/>
                            <span className={s.navText}>News</span>
                        </NavLink>
                        <NavLink to='/music' className={s.navLink} activeClassName={s.active}>
                            <span className={"fas fa-music"+' '+s.navIcon}/>
                            <span className={s.navText}>Music</span>
                        </NavLink>
                        <NavLink to='/settings' className={s.navLink} activeClassName={s.active}>
                            <span className={"fas fa-cogs"+' '+s.navIcon}/>
                            <span className={s.navText}>Settings</span>
                        </NavLink>
                </nav>
            </div>

    )

}

export default Navbar;