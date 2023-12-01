import React, {FC,useEffect, useState} from 'react';
import {SetURLSearchParams, useLocation, useSearchParams} from "react-router-dom";
import css from './Paginator.module.css'
import {useAppSelector} from "../../hooks/reduxHooks";

interface IProps{
    query:URLSearchParams,
    setQuery:SetURLSearchParams
}


const Paginator:FC<IProps> = ({query,setQuery}) => {
    const location = useLocation().pathname
    const{movies:{totalPages:moviesTotalPages},personSearch:{totalPages:personsTotalPages}}=useAppSelector(state=>state)
    const{isDark}=useAppSelector(state => state.theme)
    const [prevNext,setPrevNext] = useState<[boolean,boolean]>([false,false])

    const page = +query.get('page')
    const [totalPages, _] = useState<number>(location==='/people'?personsTotalPages:moviesTotalPages)


    useEffect(() => {
        setPrevNext([page!==1,page!==totalPages])
    }, [page,totalPages]);


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