import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    news: {},
}

export const fetchAsyncNews = createAsyncThunk('news/fetchAsyncNews', async(term='general')=>{
    const {data} = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${term}&apiKey=505366666d614b709966d480bdab5c49&page=1&pageSize=20}`)
    return data;
})


export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAsyncNews.fulfilled]: (state, {payload})=>{
            return {...state, news: payload}
        },}
})

export const getAllArticle = (state) => state.news;
export default newsSlice.reducer;