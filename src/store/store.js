import {configureStore} from "@reduxjs/toolkit";
import toggleNotification from './notificationSlice.js'

export const store = configureStore({
    reducer: {
        notification:toggleNotification,
    }
})