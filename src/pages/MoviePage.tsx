import React from 'react';

import {MovieInfoContainer} from "../components/MovieInfo/MovieInfoContainer";

const MoviePage = () => {
    window.scrollTo(0,0)
    return (
        <div>
            <MovieInfoContainer></MovieInfoContainer>
        </div>
    );
};

export {MoviePage};