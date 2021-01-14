import React from 'react';
import s from './Header.module.css';
import avatar from './../../assets/avatar.png'

export const Header = () => {
    return (
        //TODO редачить
        <header className={s.header}>
            <form className={s.searchForm}>
                <input className={s.searchInput} type="text" placeholder="Search"/>
                <button className={s.searchButton} type="submit">Search</button>
            </form>
            <nav className={s.navigation}>
                <div className={s.user}>
                    <img src={avatar} alt="avatar" className={s.userAvatar}/>
                    <span className={s.userName}>Mateusz</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;

