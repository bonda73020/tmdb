import React from 'react';
import {MoviesContainer} from "../components/MoviesContainer/MoviesContainer";
import {TrendingPanel} from "../components/TrendingPanel/TrendingPanel";
import {useSearchParams} from "react-router-dom";

const MoviesPage = () => {



    window.scrollTo(0,0)
    return (
        <div>
            <TrendingPanel></TrendingPanel>
            <MoviesContainer></MoviesContainer>
        </div>
    );
};

export {MoviesPage};