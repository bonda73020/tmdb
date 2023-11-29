import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {ThemeSwitcher} from "./ThemeSwitcher/ThemeSwitcher";
import {useAppSelector} from "../../hooks/reduxHooks";
const Header = () => {

    const {isDark} = useAppSelector(state => state.theme)

    return (
        <div className={`${css.Header} ${isDark?css.dark:css.light}`}>
            <div><h1 className={`${isDark?css.dark:css.light}`}>TMDB</h1></div>
            <div>
                <NavLink className={({isActive})=>`${isActive?css.active:''} ${isDark?css.dark:css.light}`} to={'movies'}>Movies</NavLink>
                <NavLink className={({isActive})=>`${isActive?css.active:''} ${isDark?css.dark:css.light}`} to={'genres'}>Genres</NavLink>
                <NavLink className={({isActive})=>`${isActive?css.active:''} ${isDark?css.dark:css.light}`} to={'actors'}>Actors</NavLink>
                <NavLink className={({isActive})=>`${isActive?css.active:''} ${isDark?css.dark:css.light}`} to={'search'}>Search</NavLink>
            </div>
            <div>
                <ThemeSwitcher></ThemeSwitcher>
            </div>
        </div>
    );
};

export {Header};