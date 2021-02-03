import React from 'react';
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.loader}>
            <div className={s.l_main}>
                <div className={s.l_square}><span></span><span></span><span></span></div>
                <div className={s.l_square}><span></span><span></span><span></span></div>
                <div className={s.l_square}><span></span><span></span><span></span></div>
                <div className={s.l_square}><span></span><span></span><span></span></div>
            </div>
        </div>
    );
};

export default Preloader;