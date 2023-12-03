import React, {useEffect, useState} from 'react';
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

    const[loading,setLoading] = useState<boolean>(true)

    useEffect(() => {
        dispatch(personActions.getInfo(personId))
    }, [dispatch]);

    useEffect(() => {
        setLoading(()=>{
            if (person){
                return person.id!==+personId
            }
            else{
                return true
            }
        })
    }, [person]);


    return (
        <div className={`${css.PersonInfoContainer} ${isDark?css.dark:css.light}`}>
            {!loading?<PersonInfo person={person}/>:<h2>Loading...</h2>}
        </div>
    );
};

export {PersonInfoContainer};