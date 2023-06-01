import Header from "./Components/Header/Header.jsx";
import TagsBlock from "./Components/TagsBlock/TagsBlock.jsx";
import {Route, Routes} from "react-router-dom";
import AddVideoPage from "./Pages/AddVideo/AddVideoPage.jsx";
import MainPage from "./Pages/Main/MainPage.jsx";
import VideoPage from "./Pages/Video/VideoPage.jsx";

function App() {
    return (
        <div style={{background: '#'}}>
            <Header/>
            <TagsBlock/>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path="/add-video" element={<AddVideoPage/>}/>
                <Route path={'/video'} element={<VideoPage/>}/>
            </Routes>
        </div>
    )
}

export default App
