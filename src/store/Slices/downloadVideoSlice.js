import {createSlice} from "@reduxjs/toolkit";

const downloadVideoSlice = createSlice({
    name: "video",
    initialState: {
        video: {},
    },
    reducers: {
        addVideo(state, action){
            console.log(action)
            state.video = action.payload
        }
    }
})

export const {addVideo} = downloadVideoSlice.actions

export default downloadVideoSlice.reducer