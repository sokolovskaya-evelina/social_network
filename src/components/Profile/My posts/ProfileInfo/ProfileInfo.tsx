import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={s.mainFeed}>
        <div className={s.descriptionBlock}>
            <img className={s.profileImage}
                 src='https://static10.tgstat.ru/channels/_0/34/340648ab5ac20fe131ac165c13a6c5d5.jpg'/>
            <div className={s.description}>
                <span className={s.descriptionText}><b>Date of Birth:</b> 2 January</span>
                <span className={s.descriptionText}><b>City:</b> Minsk</span>
                <span className={s.descriptionText}><b>Education:</b> BSU'11</span>
                <span className={s.descriptionText}><b>Status:</b> <i>Everyone is the creator of one’s own fate</i></span>
            </div>
        </div>

    </div>
}

export default ProfileInfo;