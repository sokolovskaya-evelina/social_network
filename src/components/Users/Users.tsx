import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../types/types";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (id: number) => void
    follow: (id: number) => void
}

const Users: React.FC<UsersPropsType> = ({
                                             totalUsersCount,
                                             pageSize,
                                             currentPage,
                                             onPageChanged,
                                             followingInProgress,
                                             follow,
                                             unfollow,
                                             users
                                         }) => {
    return (
        <div className={s.user}>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
            />
            {users.map((u) => <User key={u.id}
                                    user={u}
                                    followingInProgress={followingInProgress}
                                    unfollow={unfollow}
                                    follow={follow}/>
            )}
        </div>
    );
};

export default Users;