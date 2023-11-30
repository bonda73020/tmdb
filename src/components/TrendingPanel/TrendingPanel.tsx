import React, {useEffect, useState} from 'react';
import css from './TrendingPanel.module.css'
import {TrendUnit} from "./TrendUnit";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {trendsActions} from "../../redux/slices/trendsSlice";


const TrendingPanel = () => {
    const {movies} = useAppSelector(state => state.trends)
    const dispatch = useAppDispatch()
    const [selected,setSelected] = useState<number>(0)

    const showedTrends = 7

    useEffect(() => {
        dispatch(trendsActions.getAll(showedTrends))
    }, [dispatch]);

    const pages = []

    for (let i = 0; i<showedTrends;i++){
        pages.push(i)
    }

    const changeSelected=(i:number)=>{
        setSelected(i)
    }

    return (
        <div className={css.TrendsPanel}>
            <div className={css.magicDiv}></div>
            <div className={css.TrendsContainer}>

                <div style={{left:`calc(-${selected}*80vw)`}} className={css.TrendsContent}>
                    {movies[selected]&&pages.map(i=><TrendUnit movie={movies[i]} key={i}/>)}
                </div>
            </div>
            <div className={css.pages}>
                {pages.map(i=><div className={`${selected===i?css.active:''}`} onClick={()=>changeSelected(i)} key={i}></div>)}
            </div>

        </div>
    );
};

export {TrendingPanel};