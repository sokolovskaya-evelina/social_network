import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Users.module.css'
import userPhoto from './../../assets/user.png'
import {usersAPI} from '../../api/api';
import {toggleIsFollowingProgress} from "../../redux/users_reducer";

const Users = (props: any) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.user}>
            <div className={s.paginationBlock}>
                {pages.map((p: number) => {
                    return <span className={props.currentPage === p ? s.active : s.page}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map((u: any) => <div key={u.id} className={s.userBlock}>
                    <div className={s.userInformation}>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 alt={'user avatar'}/>
                        </NavLink>
                        <div>
                            {u.followed
                                    ? <button
                                        disabled={props.followingInProgress.
                                        some((id: number) => id === u.id)} /*className={s.followButton}*/
                                        onClick={() => {
                                            props.unfollow(u.id)                                        }}><i className={'fas fa-user-times '+ ' ' + s.followIcon}/>Unfollow</button>
                                    : <button
                                        disabled={props.followingInProgress.some((id: number) => id === u.id)} /*className={s.followButton}*/
                                        onClick={() => {
                                            props.follow(u.id)
                                        }}><i className={"fas fa-user-plus" + ' ' + s.followIcon}/>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.userDescription}>
                        <span><b>{u.name}</b></span>
                        <span><i>{u.status}</i></span>
                        <span>{'u.location.city'}</span>
                        <span>{'u.location.country'}</span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;