import {FC} from 'react';

import css from './StarsRating.module.css'

interface IProps {
    rating:number
}


const StarsRating: FC<IProps> = ({rating}) => {

    const styles = {
        background: `linear-gradient(90deg, #F5AF7CFF ${rating*10}%, #3D3229FF ${rating*10}%)`,
        backgroundClip: 'text',
        WebkitBackgroundClip:'text'
    }

    return (
        <div className={css.RatingContainer}>
            <div style={styles} className={css.MovieRating}>
                ★★★★★
            </div>
            ({rating/2})
        </div>
    );
};

export {StarsRating};