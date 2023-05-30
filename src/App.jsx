import Header from "./Components/Header/Header.jsx";
import TagsBlock from "./Components/TagsBlock/TagsBlock.jsx";
import {Route, Routes} from "react-router-dom";
import AddVideoPage from "./Pages/AddVideo/AddVideoPage.jsx";
import MainPage from "./Pages/Main/MainPage.jsx";

function App() {
    return (
        <div style={{background: '#'}}>
            <Header/>
            <TagsBlock/>
            <MainPage/>
            <Routes>
                <Route path="/add-video" element={<AddVideoPage/>}/>
            </Routes>
        </div>
    )
}

export default App
