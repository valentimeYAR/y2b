import React, {useEffect, useState} from 'react';
import s from './MainPage.module.scss'
import axios from "axios";
import VideoItem from "./VideoItem/VideoItem.jsx";

const MainPage = () => {
    const [videos, setVideos] = useState(null)
    useEffect(() => {
        axios.get("http://cors/api/videos").then(res => {
            setVideos(res.data)
        })
    }, [])
    return (
        <div className={s.container}>
            {videos.map(el => <VideoItem title={el.title} name={el.name} key={el.id}/>)}
        </div>
    );
};

export default MainPage;