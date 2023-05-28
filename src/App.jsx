import Header from "./Components/Header/Header.jsx";
import TagsBlock from "./Components/TagsBlock/TagsBlock.jsx";
import {useDispatch} from "react-redux";
import {toggleNotification} from "./store/notificationSlice.js";

function App() {
    const dispatch = useDispatch()
    const handleNotificationBlock = () => {
        dispatch(toggleNotification())
    }
    return (
        <div>
            <Header/>
            <TagsBlock/>
        </div>
    )
}

export default App
