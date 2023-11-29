import React, {useEffect, useState} from 'react';
import {IState} from "../../types/IStateType";
import {IMovie} from "../../interfaces/IMovie";
import {movieService} from "../../services/movieService";
import {TrendUnit} from "./TrendUnit";
import {imagesURL} from "../../constants/urls";
import css from './TrendingPanel.module.css'
import {useAppSelector} from "../../hooks/reduxHooks";


const TrendingPanel = () => {

    const [movies, setMovies] = useState<IMovie[]>([])
    const [selected,setSelected] = useState<number>(0)
    const {isDark} = useAppSelector(state => state.theme)



    useEffect(() => {
        movieService.getPage().then(({data:{results}})=>setMovies(results.slice(0,5)))
    }, []);

    const changeSelected=(i:number)=>{
        setSelected(i)
    }

    const pages = [0,1,2,3,4]
    return (
        <div className={`${css.TrendingPanel} ${isDark?css.dark:css.light}`}>
        <div className={css.TrendingContent}>
           <div style={{left:`calc(-90vw*${selected})`}}> {movies[selected]&&pages.map(i=><TrendUnit index={i} key={i} movie={movies[i]}/>)}</div>
        </div>
            <div className={css.pages}>
                {pages.map(i=><div className={i===selected?css.selected:''} key={i} onClick={()=>changeSelected(i)}/>)}
            </div>
        </div>

    );
};

export {TrendingPanel};