import {FC} from 'react';
import {IMovie} from "../../interfaces/IMovie";

import css from './TrendingPanel.module.css'
import {imagesURL} from "../../constants/urls";
import {StarsRating} from "../StarsRating/StarsRating";
import {useNavigate} from "react-router-dom";

interface IProps {
    movie:IMovie
}


const TrendUnit: FC<IProps> = ({movie}) => {
    const {title,backdrop_path, vote_count, vote_average,id} = movie
    const navigate = useNavigate()
    const style = {
        background:`url(${imagesURL}${backdrop_path})`,
        backgroundSize:`100% 100%`,
        backdropFilter:`blur(10px)`
    }
    return (
        <div style={style} className={css.TrendUnit}>
            <div>
                    <div>
                        <h2>{title}</h2>
                        <div>votes:{vote_count}</div>
                        <StarsRating rating={vote_average}></StarsRating>
                    <div onClick={()=>navigate(`/movies/${id}`)} className={css.TrendUnitButton}>View info</div>
                    </div>
            </div>
        </div>
    );
};

export {TrendUnit};