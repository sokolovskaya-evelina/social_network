import React from 'react';
import s from './Users.module.css'
import {UserType} from "../../types/types";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
const Users: React.FC<PropsType> = ({
                                        totalUsersCount,
                                        pageSize,
                                        currentPage,
                                        followingInProgress,
                                        follow, unfollow, onPageChanged, users
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