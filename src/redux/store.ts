import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/moviesSlice";
import {themeReducer} from "./slices/themeSlice";

const store = configureStore({
    reducer:{
        movies:movieReducer,
        theme:themeReducer
    }
})

export {store}