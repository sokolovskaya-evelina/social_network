import React from 'react';
import s from './Users.module.css'

//TODO типизация
//TODO верстка
const Users = (props: any) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://i.pinimg.com/564x/d6/c5/66/d6c5664a550fabfed058e66cd77a8100.jpg',
                followed: false,
                fullName: 'Shasha',
                status: 'Work hard to get what you like, otherwise you\'ll be forced to just like what you get.',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJOHO0s1i-4UkQ45HHdcH1lkc6uVWFqTSxw&usqp=CAU',
                followed: true,
                fullName: 'Pasha',
                status: 'Success is the ability to go from failure to failure without losing your enthusiasm.',
                location: {city: 'Vitebsk', country: 'Belarus'}
            },
            {
                id: 3,
                photoURL: 'https://1ul.ru/upload/resize_image/publication/76569/960_0_3_14288063_1093082154114366_4724349925498814464_n_1.jpg',
                followed: false,
                fullName: 'Vera',
                status: 'Keep smiling, because life is a beautiful thing and there\'s so much to smile about.',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 4,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUCNBMdx3MJjnI4Kc2z6E42VDT_K71XH0nA&usqp=CAU',
                followed: true,
                fullName: 'Misha',
                status: 'Choose a job you love, and you will never have to work a day in your life.',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }
    return (
        <div className={s.user}>
            {
                props.users.map((u: any) => <div key={u.id} className={s.userBlock}>
                    <div className={s.userInformation}>
                        <img className={s.userPhoto} src={u.photoURL}/>
                        <div>
                            {
                                u.followed
                                    ? <button className={s.followButton} onClick={() => {
                                        props.unfollow(u.id)
                                    }}><i
                                        className={"fas fa-user-times"+' '+s.followIcon}/>Unfollow</button>
                                    : <button className={s.followButton} onClick={() => {
                                        props.follow(u.id)
                                    }}><i
                                        className={"fas fa-user-plus"+' '+s.followIcon}/>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.userDescription}>
                        <span><b>{u.fullName}</b></span>
                        <span><i>{u.status}</i></span>
                        <span>{u.location.city}</span>
                        <span>{u.location.country}</span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Users;