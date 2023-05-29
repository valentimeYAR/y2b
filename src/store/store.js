import {configureStore} from "@reduxjs/toolkit";
import toggleNotification from './Slices/notificationSlice.js'
import addVideo from "./Slices/downloadVideoSlice.js";

export const store = configureStore({
    reducer: {
        notification:toggleNotification,
        addVideo: addVideo,
    }
})