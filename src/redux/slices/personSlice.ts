import {IPerson} from "../../interfaces/IPerson";
import {AxiosError} from "axios";

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


interface IState{
    person:IPerson
}

const initialState:IState={
    person:null
}


const getInfo = createAsyncThunk(
    'personSlice/getInfo',
    async (id:string,{rejectWithValue})=>{
       try {
           const {data} = await movieService.getPersonInfo(id)
           return data
       }
       catch (e){
           const err = e as AxiosError
           return rejectWithValue(err.response.data)
       }
    }
)

const personSlice = createSlice({
    name:'personSlice',
    initialState,
    reducers:{ },
    extraReducers:builder =>
        builder
            .addCase(getInfo.fulfilled,(state, action)=>{
                state.person = action.payload
            })
})


const{reducer:personReducer,actions}=personSlice

const personActions={
    ...actions,
    getInfo
}


export {
    personReducer,
    personActions
}