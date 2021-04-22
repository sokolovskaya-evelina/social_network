import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Users.module.css'
import {UserType} from "../../types/types";
import {Avatar, Button, Card, Pagination} from "antd";
import {UserAddOutlined, UserDeleteOutlined, UserOutlined} from "@ant-design/icons";

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

const styles = {
    userBlock: {
        width: '400px',
        margin: ' 20px 0',
    }
}

const Users: React.FC<UsersPropsType> = (props) => {
    return (
        <div className={s.user}>
            <Pagination
                total={props.totalUsersCount}
                showSizeChanger={false}
                onChange={props.onPageChanged}
            />
            {props.users.map((u) =>
                <Card style={styles.userBlock} key={u.id}>
                    <div style={{display: 'flex'}}>
                        <NavLink to={'/profile/' + u.id}>
                            {u.photos.small !== null
                                ? <img className={s.userPhoto} src={u.photos.small}
                                       alt={'user avatar'}/>
                                : <Avatar size={64} icon={<UserOutlined/>}/>
                            }
                        </NavLink>
                        <div className={s.userDescription}>
                            <NavLink to={'/profile/' + u.id}><span><b>{u.name}</b></span></NavLink>
                            <span><i>{u.status ? u.status : 'Статус отсутствует'}</i></span>
                        </div>
                    </div>

                    <div style={{marginTop: '20px'}}>
                        {u.followed
                            ? <Button
                                type={'primary'}
                                icon={<UserDeleteOutlined/>}
                                disabled={props.followingInProgress.some((id: number) => id === u.id)} /*className={s.followButton}*/
                                onClick={() => {
                                    props.unfollow(u.id)
                                }}>
                                Unfollow
                            </Button>
                            : <Button
                                type={'primary'}
                                icon={<UserAddOutlined/>}
                                disabled={props.followingInProgress.some((id: number) => id === u.id)} /*className={s.followButton}*/
                                onClick={() => {
                                    props.follow(u.id)
                                }}>
                                Follow
                            </Button>
                        }
                    </div>
                </Card>)
            }
        </div>
    );
};

export default Users;