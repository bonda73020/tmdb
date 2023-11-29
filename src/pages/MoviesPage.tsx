import React from 'react';
import {MoviesContainer} from "../components/MoviesContainer/MoviesContainer";
import {TrendingPanel} from "../components/TrendingPanel/TrendingPanel";

const MoviesPage = () => {
    return (
        <div>
            <TrendingPanel></TrendingPanel>
            <MoviesContainer></MoviesContainer>
        </div>
    );
};

export {MoviesPage};