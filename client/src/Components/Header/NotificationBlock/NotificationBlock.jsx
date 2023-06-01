import React from 'react';
import s from './NotificationBlock.module.scss'
import SettingsIcon from "../../../UI/Images/SettingsIcon.jsx";
import NotificationItem from "./NotificationItem.jsx";

const NotificationBlock = () => {
    return (
        <div className={s.container}>
            <div className={s.top}>
                <h2>Уведомления</h2>
                <SettingsIcon size={'30px'}/>
            </div>
            <div className={s.items}>
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
                <NotificationItem/>
            </div>
        </div>
    );
};

export default NotificationBlock;