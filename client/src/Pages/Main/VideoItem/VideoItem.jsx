import React from 'react';
import s from './VideoItem.module.scss'
import {Link} from "react-router-dom";

const VideoItem = ({name, title}) => {
    return (
        <Link to={'/video'}>
            <div className={s.container}>
                <div className={s.img}></div>
                <div className={s.info}>
                    <div className={s.top}>
                        <div className={s.profile}></div>
                        <h2 className={s.title}>{title}</h2>
                    </div>
                    <div className={s.InfoBlock}>
                        <p className={s.name}>{name}</p>
                        <p className={s.date}>1.2 тыс.просмотров 55 минут назад</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VideoItem;