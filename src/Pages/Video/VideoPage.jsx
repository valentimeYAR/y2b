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
                height={'100%'}
            />
        </div>
    );
};

export default VideoPage;