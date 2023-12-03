import React from 'react';
import {MoviesContainer} from "../components/MoviesContainer/MoviesContainer";


const SearchPage = () => {
    window.scrollTo(0,0)
    return (
        <div>
            <MoviesContainer></MoviesContainer>
        </div>
    );
};

export {SearchPage};