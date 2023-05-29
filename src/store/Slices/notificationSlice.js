import {createSlice} from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        notification: false
    },
    reducers: {
        toggleNotification(state, action){
            state.notification = action.payload.notification;
        }
    }
})

export const {toggleNotification}= notificationSlice.actions

export default notificationSlice.reducer