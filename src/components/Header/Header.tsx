import React from 'react';
import s from './Header.module.css';


//TODO сделать иконки на панели навигации
export const Header = () => {
    return (
        <header className={s.header}>
            <form className={s.searchForm}>
                <input className={s.searchInput} type="text" placeholder="Search"/>
                <button className={"fas fa-search" + " " + s.searchButton} type="submit"/>
            </form>
            <nav className={s.navigation}>
                <div className={s.user}>
                    <img src={'https://static10.tgstat.ru/channels/_0/34/340648ab5ac20fe131ac165c13a6c5d5.jpg'} alt="avatar" className={s.userAvatar}/>
                    <span className={s.userName}>Alisa</span>
                </div>
            </nav>
        </header>
    )
}

export default Header;

