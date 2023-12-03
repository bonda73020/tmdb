import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {ThemeSwitcher} from "./ThemeSwitcher/ThemeSwitcher";
import {useAppSelector} from "../../hooks/reduxHooks";
import {UserIcon} from "../UserIcon/UserIcon";
const Header = () => {

    const {isDark} = useAppSelector(state => state.theme)

    return (
        <div id={css.Header} className={`${isDark?css.dark:css.light}`}>
            <div><h1 className={`${isDark?css.dark:css.light}`}>TMDB</h1></div>
            <div>
                <NavLink className={({isActive})=>`${isActive?css.active:''} ${isDark?css.dark:css.light}`} to={'movies'}>Movies</NavLink>
                <NavLink className={({isActive})=>`${isActive?css.active:''} ${isDark?css.dark:css.light}`} to={'genres'}>Genres</NavLink>
                <NavLink className={({isActive})=>`${isActive?css.active:''} ${isDark?css.dark:css.light}`} to={'people'}>People</NavLink>
                <NavLink className={({isActive})=>`${isActive?css.active:''} ${isDark?css.dark:css.light}`} to={'search'}>Search</NavLink>
            </div>
            <div>
                <ThemeSwitcher></ThemeSwitcher>
            </div>
            <div>
                <UserIcon></UserIcon>
            </div>
        </div>
    );
};

export {Header};