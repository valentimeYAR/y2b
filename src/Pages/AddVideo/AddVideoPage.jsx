import s from './AddVideo.module.scss'
import {useState} from "react";
import {useDropzone} from "react-dropzone";
import UploadIcon from "../../UI/Images/UploadIcon.jsx";
import axios from "axios";
import {redirect} from "react-router-dom";

const AddVideoPage = () => {
    const [selectVideo, setSelectVideo] = useState(null);
    const [videoTitle, setVideoTitle] = useState('');
    const [loaded, setLoaded] = useState(false)
    const onDrop = (acceptedFiles) => {
        setSelectVideo(acceptedFiles[0])
    }
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectVideo && videoTitle.length >= 10) {
            try {
                const formData = new FormData()
                formData.append('video', selectVideo)
                formData.append('title', videoTitle)
                const response = await axios.post('http://cors/api/load-video', formData)
                if (response.status === 200) {
                    setLoaded(true)
                    window.location.href = '/'
                }
            } catch (e) {
                console.log(e)
            }
        }
    }
    return (
        <div className={s.container}>
            <h1 className={s.title}>Загрузка видео</h1>
            <form onSubmit={handleSubmit}>
                <div {...getRootProps()} className={`${s.dropzone} ${isDragActive ? 'active' : ''}`}>
                    <input {...getInputProps()} />
                    {selectVideo ? (
                        <div className={s.onSelectedVideo}>
                            <h2 className={`${s.videoTitle} ${s.title}`}>{videoTitle ? videoTitle : "Название видео"}</h2>
                            {selectVideo && <p>Видео добавлено, введите название (мин. 10 символов)</p>}
                        </div>
                    ) : (
                        <div className={s.dropContent}>
                            <UploadIcon size={'150px'}/>
                            <p>Перетащите файлы сюда или нажмите, чтобы выбрать их на компьютере.</p>
                        </div>
                    )}
                </div>
                <div className={s.buttonContainer}>
                    {selectVideo !== null &&
                        <input
                            type={'text'}
                            className={s.videoTitleInput}
                            value={videoTitle}
                            onChange={e => setVideoTitle(e.target.value)}
                            placeholder={'Введите название видео'}
                        />
                    }
                    <button type="submit" disabled={!selectVideo || videoTitle.length < 10}
                            className={s.uploadBtn}>Загрузить видео
                    </button>
                    {loaded && <p>Видео успешно загружено!</p>}
                </div>
            </form>
        </div>
    );
};

export default AddVideoPage;