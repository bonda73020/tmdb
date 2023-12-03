import React from 'react';

import img from '../../img/userIcon.png'
import css from './UserIcon.module.css'
const UserIcon = () => {
    return (
        <div className={css.UserIcon}>
            <img src={img} alt="user"/>
        </div>
    );
};

export {UserIcon};