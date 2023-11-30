import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import css from './Paginator.module.css'
import {useAppSelector} from "../../hooks/reduxHooks";

const Paginator = () => {
    const{totalPages}=useAppSelector(state => state.movies)
    const{isDark}=useAppSelector(state => state.theme)
    const [prevNext,setPrevNext] = useState<[boolean,boolean]>([false,false])

    const [query,setQuery] = useSearchParams({'page':'1'})
    const page = +query.get('page')

    useEffect(() => {
        setPrevNext([page!==1,page!==totalPages])

    }, [page]);


    const handleNext=()=>{
        if (prevNext[1]){
            setQuery(prev => {
                prev.set('page',`${+prev.get('page')+1}`)
                return prev
            })
        }
    }
    const handlePrev=()=>{
        if (prevNext[0]){
            setQuery(prev => {
                prev.set('page',`${+prev.get('page')-1}`)
                return prev
            })
        }
    }


    return (
        <div className={`${css.Paginator} ${isDark?css.dark:css.light}`}>
            <div onClick={()=>handlePrev()} className={`${prevNext[0]?css.active:''}`}>◄</div>
            <div id={css.page}>{page}</div>
            <div onClick={()=>handleNext()} className={`${prevNext[1]?css.active:''}`}>►</div>
        </div>
    );
};

export {Paginator};