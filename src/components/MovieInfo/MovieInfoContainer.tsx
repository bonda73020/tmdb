import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {singleMovieActions} from "../../redux/slices/singleMovieSlice";
import {MovieInfo} from "./MovieInfo";

const MovieInfoContainer = () => {

    const{movieId}=useParams()
    const {movie} = useAppSelector(state => state.singleMovie)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(singleMovieActions.loadInfo(movieId))
    }, [dispatch,movieId]);
    return (
        <div>
            {movie&&<MovieInfo movie={movie}/>}
        </div>
    );
};

export {MovieInfoContainer};