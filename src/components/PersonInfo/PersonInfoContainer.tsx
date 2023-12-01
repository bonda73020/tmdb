import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useDispatch} from "react-redux";
import {personActions} from "../../redux/slices/personSlice";
import {PersonInfo} from "./PersonInfo";
import css from './PersonInfo.module.css'

const PersonInfoContainer = () => {

    const{personId}= useParams()
    const {isDark}=useAppSelector(state => state.theme)
    const{person} = useAppSelector(state => state.person)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(personActions.getInfo(personId))
    }, [dispatch]);

    return (
        <div className={`${css.PersonInfoContainer} ${isDark?css.dark:css.light}`}>
            {person&&<PersonInfo person={person}/>}
        </div>
    );
};

export {PersonInfoContainer};