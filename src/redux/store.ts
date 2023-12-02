import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/moviesSlice";
import {themeReducer} from "./slices/themeSlice";
import {trendsReducer} from "./slices/trendsSlice";
import {genreReducer} from "./slices/genresSlice";
import {personSearchReducer} from "./slices/personSearchSlice";
import {personReducer} from "./slices/personSlice";
import {singleMovieReducer} from "./slices/singleMovieSlice";

const store = configureStore({
    reducer:{
        movies:movieReducer,
        theme:themeReducer,
        trends:trendsReducer,
        genres:genreReducer,
        personSearch:personSearchReducer,
        person:personReducer,
        singleMovie:singleMovieReducer
    }
})

export {store}