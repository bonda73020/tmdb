import {FC, useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces/IMovie";
import css from './MovieInfo.module.css'
import {imagesURL} from "../../constants/urls";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {StarsRating} from "../StarsRating/StarsRating";
import {singleMovieActions} from "../../redux/slices/singleMovieSlice";

interface IProps {
    movie:IMovie
}


const MovieInfo: FC<IProps> = ({movie}) => {
    const{isDark} = useAppSelector(state => state.theme)
    const{id,backdrop_path, title,overview,tagline,genres,vote_count,vote_average}=movie
    const navigate = useNavigate()
    const {credits} = useAppSelector(state => state.singleMovie)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(singleMovieActions.getCredits(`${id}`))
    }, [dispatch,id]);
    const handleGenreBadgeClick=(i:number)=>{
        navigate(`/genres?page=1&sortBy=popularity&sortDirection=desc&searchQuery=&genres=${i}`)
    }

    return (
        <div className={`${css.MovieInfo} ${isDark?css.dark:css.light}`}>
            <h1>{title}</h1>
            {backdrop_path&&<img className={css.BigPoster} src={`${imagesURL}${backdrop_path}`} alt=""/>}
            <div className={`${css.infoContainer} ${isDark?css.dark:css.light}`}>
                {tagline?<h2>{tagline}</h2>:<h2>Overview</h2>}
                <div>{overview}</div>
            </div>
            <div className={css.infoContainer}>
            <h3>Genres</h3>
                <div className={css.genreBadgeContainer}>
                    {genres&&genres.map(i=><div key={i.id} onClick={()=>handleGenreBadgeClick(i.id)}>{i.name}</div>)}
                </div>
            </div>
            <div className={`${css.infoContainer} ${isDark?css.dark:css.light}`}>
                <h3>Votes</h3>
                <div>
                    <div>
                        <h4>Votes count:</h4>
                        <div>{vote_count}</div>
                    </div>
                    <div>
                        <h4>Average vote</h4>
                        <StarsRating rating={vote_average}></StarsRating>
                    </div>
                </div>
            </div>
            <div className={`${css.infoContainer} ${css.castContainer} ${isDark?css.dark:css.light}`}>
                <h3>Cast:</h3>
                {credits&&credits.cast&&<div>
                    {credits.cast.map(i=><NavLink key={i.id} to={`/people/${i.id}`}>{i.name}</NavLink>)}
                </div>}
            </div>
        </div>
    );
};

export {MovieInfo};