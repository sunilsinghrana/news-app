import { configureStore } from "@reduxjs/toolkit";
import newsReducers from './news/newsSlice'

export const store =  configureStore({
    reducer: newsReducers,
})