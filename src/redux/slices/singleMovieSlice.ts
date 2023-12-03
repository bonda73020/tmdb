import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie} from "../../interfaces/IMovie";
import {movieService} from "../../services/movieService";
import {ICredits} from "../../interfaces/ICredits";


interface IState{
    movie:IMovie,
    credits:ICredits
}


const initialState:IState = {
    movie:null,
    credits:null
}


const loadInfo = createAsyncThunk(
    'singleMovieSlice/loadInfo',
    async(id:string,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getMovieInfo(id)
            return data
        }
        catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const getCredits = createAsyncThunk(
    'singleMovieSlice/getCredits',
    async (id:string,{rejectWithValue})=>{
        try {
            const{data}=await movieService.getMovieCredits(id)
            return data
        }
        catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const singleMovieSlice = createSlice({
    name:'singleMovieSlice',
    initialState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(loadInfo.fulfilled,(state, action)=>{
                state.movie = action.payload
            })
            .addCase(getCredits.fulfilled,(state, action)=>{
                state.credits = action.payload
            })
})

const {reducer:singleMovieReducer,actions}= singleMovieSlice

const singleMovieActions = {
    ...actions,
    loadInfo,
    getCredits
}

export {
    singleMovieActions,
    singleMovieReducer
}