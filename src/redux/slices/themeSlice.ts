import {createSlice} from "@reduxjs/toolkit";


interface IState{
    isDark:boolean
}


const initialState:IState = {
    isDark:false
}

const themeSlice = createSlice({
    name:'themeSlice',
    initialState,
    reducers:{
        change:state=>{
            state.isDark = !state.isDark
        }
    }
})

const {reducer:themeReducer,actions} = themeSlice

const themeActions = {
    ...actions
}

export {themeActions,themeReducer}