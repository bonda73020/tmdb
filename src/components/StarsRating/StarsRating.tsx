import {FC, useEffect, useState} from 'react';

import css from './StarsRating.module.css'

interface IProps {
    rating:number
}


const StarsRating: FC<IProps> = ({rating}) => {
    const [currentRating, setCurrentRating] = useState(rating);
    const styles = {
        background: `linear-gradient(90deg, #F5AF7CFF ${currentRating*10}%, #3D3229FF ${rating*10}%)`,
        WebkitBackgroundClip:'text!important'
    }

    useEffect(() => {
        // Update the state and trigger a re-render when rating changes
        setCurrentRating(rating);
    }, [rating]);


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