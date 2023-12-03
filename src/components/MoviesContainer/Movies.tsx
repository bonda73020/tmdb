import React, {FC, useEffect} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {movieActions} from "../../redux/slices/moviesSlice";
import {Movie} from "./Movie";
import css from './Movies.module.css'


interface IProps{
    query:URLSearchParams,
    setQuery:SetURLSearchParams
}

const Movies:FC<IProps> = ({query,setQuery}) => {

    const {movies} = useAppSelector(state => state.movies)
    const {isDark} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(movieActions.getAll({searchQuery:query.get('searchQuery'), page:+query.get('page'),genres:query.get('genres'),sortBy:`${query.get('sortBy')}.${query.get('sortDirection')}`}))
    }, [dispatch,query]);


    return (
        <div className={`${css.MoviesContainer} ${isDark?css.dark:css.light}`}>
            {movies.map(i=><Movie movie={i} key={i.id}/>)}
        </div>
    );
};

export {Movies};