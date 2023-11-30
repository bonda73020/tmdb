import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/moviesSlice";
import {Movie} from "./Movie";
import css from './Movies.module.css'
import {useSearchParams} from "react-router-dom";

const Movies = () => {

    const {movies} = useAppSelector(state => state.movies)
    const {isDark} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()

    const [query,setQuery] = useSearchParams()
    useEffect(() => {
        dispatch(movieActions.getAll({page:+query.get('page'),genres:'',sortBy:'popularity.desc'}))
    }, [dispatch,query]);


    return (
        <div className={`${css.MoviesContainer} ${isDark?css.dark:css.light}`}>
            {movies.map(i=><Movie movie={i} key={i.id}/>)}
        </div>
    );
};

export {Movies};