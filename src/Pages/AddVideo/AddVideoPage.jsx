import s from './AddVideo.module.scss'
import {useState} from "react";
import {useDropzone} from "react-dropzone";
import UploadIcon from "../../UI/Images/UploadIcon.jsx";
import {useDispatch} from "react-redux";
import {addVideo} from "../../store/Slices/downloadVideoSlice.js";
import axios from "axios";

const AddVideoPage = () => {
    const dispatch = useDispatch()
    const [selectVideo, setSelectVideo] = useState(null);
    const onDrop = (acceptedFiles) => {
        setSelectVideo(acceptedFiles[0])
    }
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectVideo) {
            try {
                const formData = new FormData()
                formData.append('video', selectVideo)

                const videoInfo = {
                    path: selectVideo.path,
                    name: selectVideo.name,
                    type: selectVideo.type,
                }
                dispatch(addVideo(videoInfo))
                const response = await axios.post('http://example/api/upload', formData)

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
                            <h2 className={`${s.videoTitle} ${s.title}`}>{selectVideo.name}</h2>
                        </div>
                    ) : (
                        <div className={s.dropContent}>
                            <UploadIcon size={'150px'}/>
                            <p>Перетащите файлы сюда или нажмите, чтобы выбрать их на компьютере.</p>
                        </div>
                    )}
                </div>
                <div className={s.buttonContainer}>
                    <button type="submit" disabled={!selectVideo} className={s.uploadBtn}>Загрузить видео</button>
                </div>
            </form>
        </div>
    );
};

export default AddVideoPage;