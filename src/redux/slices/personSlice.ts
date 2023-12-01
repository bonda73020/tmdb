import {IPerson} from "../../interfaces/IPerson";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";
import {AxiosError} from "axios";

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
    reducers:{
        setInitialInfo:(state, action:PayloadAction<IPerson>)=>{
            state.person = action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getInfo.fulfilled,(state, action)=>{
                state.person.also_known_as = action.payload.also_known_as
                state.person.biography = action.payload.biography
                state.person.imdb_id = action.payload.imdb_id
                state.person.place_of_birth = action.payload.place_of_birth
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