import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IPersonSearchPage} from "../../interfaces/IPersonSearchPage";
import {IPerson} from "../../interfaces/IPerson";
import {movieService} from "../../services/movieService";



interface IState{
    searchResults:IPerson[],
    page:number,
    totalPages:number
}

const initialState:IState={
    searchResults:[],
    page:1,
    totalPages:null
}


const getResults = createAsyncThunk<IPersonSearchPage,{searchQuery:string,page:number}>(
    'personSearchSlice/getResults',
    async ({searchQuery,page},{rejectWithValue})=>{
        try {
            const{data} = await movieService.searchPerson({searchQuery,page})
            return data
        }
        catch (e){
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)


const personSearchSlice = createSlice({
    name:'personSearchSlice',
    initialState,
    reducers:{
        reset:(state)=>{
            state.searchResults = []
            state.page=1
            state.totalPages = 1
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getResults.fulfilled,(state, action)=>{
                state.searchResults = action.payload.results
                state.page = action.payload.page
                state.totalPages = action.payload.total_pages
            })
})


const{reducer:personSearchReducer,actions}=personSearchSlice

const personSearchActions = {
    ...actions,
    getResults
}

export {
    personSearchActions,
    personSearchReducer
}