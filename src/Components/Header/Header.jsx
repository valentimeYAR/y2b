import React from 'react';
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.container}>
            <div className={s.left}></div>
            <div className={s.center}></div>
            <div className={s.right}></div>
        </div>
    );
};

export default Header;