import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {singleMovieActions} from "../../redux/slices/singleMovieSlice";
import {MovieInfo} from "./MovieInfo";

const MovieInfoContainer = () => {
    const{movieId}=useParams()
    const {movie} = useAppSelector(state => state.singleMovie)
    const [loading,setLoading] = useState<boolean>(true)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(singleMovieActions.loadInfo(movieId))
    }, [dispatch,movieId]);
    useEffect(() => {
        setLoading(prevState => {
            if (movie){
                return movie.id !== +movieId
            }
            else{
                return true
            }
        })
    }, [movie]);
    return (
        <div>
            {(!loading)?<MovieInfo movie={movie}/>:<h2>Loading...</h2>}
        </div>
    );
};

export {MovieInfoContainer};