import React from 'react';
import {Link} from "react-router-dom";
import s from './NotificationItem.module.scss'

const NotificationItem = () => {
    return (
        <>
            <div className={s.content}>
                <div className={s.left}>
                    <p className={s.avatar}></p>
                </div>
                <div className={s.center}>
                    <Link to={'/'} className={s.text}>
                        На канале разрабы появилось новое видео: "Литкод паттерны Влад Тен - задачи с собеседования на
                        алгоритмы". Советуем его посмотреть
                    </Link>
                    <p className={s.time}>4 часа назад</p>
                </div>
                <div className={s.right}>
                    <img
                        src="https://sun1-26.userapi.com/impg/Lb3A1Q7nP6SEdMAnbiXmWPI-L_HOdgaEfI8JEw/h03CdtQyHss.jpg?size=1280x741&quality=95&sign=8878a769ce30d9b73dd8013cb8589489&type=album"
                        alt="Preview" className={s.preview}/>
                </div>
            </div>
        </>
    );
};

export default NotificationItem;