import React from 'react';
import {MoviesContainer} from "../components/MoviesContainer/MoviesContainer";
import {TrendingPanel} from "../components/TrendingPanel/TrendingPanel";
import {useSearchParams} from "react-router-dom";

const MoviesPage = () => {




    return (
        <div>
            <TrendingPanel></TrendingPanel>
            <MoviesContainer></MoviesContainer>
        </div>
    );
};

export {MoviesPage};