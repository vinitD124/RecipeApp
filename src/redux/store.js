import { configureStore} from "@reduxjs/toolkit";

import likeReducer from './Slices/LikeSlice'

export const store = configureStore({
    reducer:{
        like:likeReducer
    }
})