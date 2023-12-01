import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces/IGenre";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";

interface IState{
    genres:IGenre[]
}


const initialState:IState={
    genres:[]
}

const getAll=createAsyncThunk<IGenre[],void>(
    'genresSlice/getAll',
           async (_,{rejectWithValue})=>{
            try {
                const {data} = await movieService.getGenres()
                return data.genres
            }
            catch (e){
                const err = e as AxiosError
                return rejectWithValue(err.response.data)
            }
           }
)


const genresSlice=  createSlice({
    name:'genresSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.genres = action.payload
            })
})



const {reducer:genreReducer,actions} = genresSlice


const genreActions = {
    ...actions,
    getAll
}

export {
    genreReducer,
    genreActions
}