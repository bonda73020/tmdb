import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/IMovie";
import {AxiosError} from "axios";
import {getPageParams, movieService} from "../../services/movieService";
import {IMoviePage} from "../../interfaces/IMoviePage";


interface IState{
    movies:IMovie[]
    page:number
    totalPages:number
}

const initialState:IState={
    movies:[],
    page: 1,
    totalPages: null
}


const getAll = createAsyncThunk<IMoviePage,getPageParams>(
    "movieSlice/getAll",
    async({page=1,sortBy='popularity.desc',genres=''},{rejectWithValue})=>{
            try{
                const {data} = await movieService.getPage({page,sortBy,genres})
                return data
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
    reducers:{
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.movies = action.payload.results
                state.page = action.payload.page
                state.totalPages = action.payload.total_pages
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