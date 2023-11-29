import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/moviesSlice";
import {Movie} from "./Movie";
import css from './Movies.module.css'

const Movies = () => {

    const {movies} = useAppSelector(state => state.movies)
    const {isDark} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(movieActions.getAll())
    }, [dispatch]);


    return (
        <div className={`${css.MoviesContainer} ${isDark?css.dark:css.light}`}>
            {movies.map(i=><Movie movie={i} key={i.id}/>)}
        </div>
    );
};

export {Movies};