import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Users.module.css'
import {Avatar, Button, Card} from "antd";
import {UserAddOutlined, UserDeleteOutlined, UserOutlined} from "@ant-design/icons";
import {UserType} from "../../types/types";

type UsersPropsType = {
    user: UserType
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

const Users: React.FC<UsersPropsType> = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div className={s.user}>
            <Card style={styles.userBlock} key={user.id}>
                <div style={{display: 'flex'}}>
                    <NavLink to={'/profile/' + user.id}>
                        {user.photos.small !== null
                            ? <img className={s.userPhoto} src={user.photos.small}
                                   alt={'user avatar'}/>
                            : <Avatar size={64} icon={<UserOutlined/>}/>
                        }
                    </NavLink>
                    <div className={s.userDescription}>
                        <NavLink to={'/profile/' + user.id}><span><b>{user.name}</b></span></NavLink>
                        <span><i>{user.status ? user.status : 'Статус отсутствует'}</i></span>
                    </div>
                </div>

                <div style={{marginTop: '20px'}}>
                    {user.followed
                        ? <Button
                            type={'primary'}
                            icon={<UserDeleteOutlined/>}
                            disabled={followingInProgress.some((id: number) => id === user.id)} /*className={s.followButton}*/
                            onClick={() => {
                                unfollow(user.id)
                            }}>
                            Unfollow
                        </Button>
                        : <Button
                            type={'primary'}
                            icon={<UserAddOutlined/>}
                            disabled={followingInProgress.some((id: number) => id === user.id)} /*className={s.followButton}*/
                            onClick={() => {
                                follow(user.id)
                            }}>
                            Follow
                        </Button>
                    }
                </div>
            </Card>)
        </div>
    );
};

export default Users;