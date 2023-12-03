import {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../interfaces/IMovie";
import {imagesURL} from "../../constants/urls";
import css from './Movies.module.css'
import {StarsRating} from "../StarsRating/StarsRating";

interface IProps {
    movie:IMovie
}


const Movie: FC<IProps> = ({movie}) => {
    const{title,poster_path,vote_average, id} = movie
    const navigate = useNavigate()

    const handleClick=()=>{
        navigate(`/movies/${id}`)
    }

    return (
        <div onClick={()=>handleClick()} className={css.MoviesUnit}>
            {poster_path&&<img src={`${imagesURL}${poster_path}`} alt={`${title}`}/>}
            <div>
                <h3>{title}</h3>
            </div>
            <StarsRating rating={vote_average}></StarsRating>
        </div>
    );
};

export {Movie};