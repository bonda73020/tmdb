import {FC} from 'react';
import {IMovie} from "../../interfaces/IMovie";
import {imagesURL} from "../../constants/urls";
import css from './Movies.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
interface IProps {
    movie:IMovie
}


const Movie: FC<IProps> = ({movie}) => {
    const{title,original_title,poster_path,vote_average} = movie
    return (
        <div className={css.MoviesUnit}>
            <img src={`${imagesURL}${poster_path}`} alt={`${title}`}/>
            <div>
                <h3>{title}</h3>
            </div>
            <StarsRating rating={vote_average}></StarsRating>
        </div>
    );
};

export {Movie};