import React, {useEffect} from 'react';

import css from './ThemeSwitcher.module.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {themeActions} from "../../../redux/slices/themeSlice";
const ThemeSwitcher = () => {
    const {isDark} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()
    return (
        <div className={css.Container} onClick={()=>dispatch(themeActions.change())}>
            <div className={`${css.Button} ${isDark?css.dark:css.light}`}></div>
        </div>
    );
};

export {ThemeSwitcher};