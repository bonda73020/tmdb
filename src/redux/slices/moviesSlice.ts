import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/IMovie";
import {AxiosError} from "axios";
import {movieService} from "../../services/movieService";


interface IState{
    movies:IMovie[]
}

const initialState:IState={
    movies:[]
}


const getAll = createAsyncThunk<IMovie[],void>(
    "movieSlice/getAll",
    async(_,{rejectWithValue})=>{
            try{
                const {data:{results}} = await movieService.getPage()
                return results
            }
            catch (e){
                const err = e as AxiosError
                return rejectWithValue(err.response.data)
            }
    }
)


const movieSlice = createSlice({
    name:"moviesSlice",
    initialState,
    reducers:{},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.movies = action.payload
            })
})


const {reducer:movieReducer,actions} = movieSlice


const movieActions = {
    ...actions,
    getAll
}

export {
    movieReducer,
    movieActions
}