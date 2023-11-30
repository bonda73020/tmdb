import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/moviesSlice";
import {themeReducer} from "./slices/themeSlice";
import {trendsReducer} from "./slices/trendsSlice";

const store = configureStore({
    reducer:{
        movies:movieReducer,
        theme:themeReducer,
        trends:trendsReducer
    }
})

export {store}