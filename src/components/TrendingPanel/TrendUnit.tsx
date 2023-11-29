import {FC} from 'react';
import {IMovie} from "../../interfaces/IMovie";
import {imagesURL} from "../../constants/urls";
import css from './TrendingPanel.module.css'
import {StarsRating} from "../StarsRating/StarsRating";
interface IProps {
    index:number
    movie:IMovie
}


const TrendUnit: FC<IProps> = ({movie,index}) => {
    const {original_title,title,backdrop_path,vote_average,vote_count} = movie
    const style={left:`calc(90vw*${index})`}
    return (
        <div className={css.TrendingUnit}>
            <img style={style} src={`${imagesURL}${backdrop_path}`} alt=""/>
            <div style={style}>
                <h2>{title}</h2>
                <div>votes:{vote_count}</div>
                <StarsRating rating={vote_average}></StarsRating>
                <div className={css.UnitButton}>View info</div>
            </div>
        </div>
    );
};

export {TrendUnit};