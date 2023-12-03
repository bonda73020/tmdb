import {IMovie} from "../../interfaces/IMovie";
import {AxiosError} from "axios";

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


interface IState{
    movies: IMovie[]
}

const initialState:IState={
    movies:[]
}


const getAll = createAsyncThunk<IMovie[],number>(
    "trendsSlice/getAll",
    async (i:number,{rejectWithValue})=>{
        try {
            const {data:{results}} = await movieService.getPage({page:1,sortBy:'popularity.desc',genres:''})
            return results.slice(0,i)
        }
        catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)




const trendsSlice = createSlice({
    name:"trendsSlice",
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.movies = action.payload
            })
})


const {reducer:trendsReducer,actions} = trendsSlice

const trendsActions = {
    ...actions,
    getAll
}


export {
    trendsReducer,
    trendsActions
}