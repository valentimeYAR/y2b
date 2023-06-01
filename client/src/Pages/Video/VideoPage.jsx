import ReactPlayer from "react-player";
import s from './VideoPage.module.scss'
import React from "react";

const VideoPage = () => {
    return (
        <div className={s.container}>
            <ReactPlayer
                url={"http://cors//storage//videos//oCBdGBmEGfa5QEEbzhCib6jYEn6HRY2BoJ3vt2YG.mp4"}
                controls={true}
                width={'100%'}
                height={'700px'}
            />
            <div className={s.info}>
                <h2 className={s.title}></h2>
                <div className={s.user}>
                    <div className={s.avatar}></div>
                    <div className={s.userInfo}>
                        <p className={s.userName}></p>
                        <p className={s.subscribers}></p>
                    </div>
                    <button className={s.subsribe}>Пописаться</button>
                </div>
            </div>
        </div>
    );
};

export default VideoPage;