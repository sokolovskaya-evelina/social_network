import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div className={s.content}>
    <div>
      <img className={s.profileImage} src='https://thispersondoesnotexist.com/image' />
    </div>
    <div className={s.descriptionBlock}>
      ava + description
    </div>
  </div>
}

export default ProfileInfo;