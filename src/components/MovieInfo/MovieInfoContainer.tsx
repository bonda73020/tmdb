import React from 'react';
import {useParams} from "react-router-dom";

const MovieInfoContainer = () => {

    const{movieId}=useParams()
    console.log(movieId)
    return (
        <div>
            
        </div>
    );
};

export {MovieInfoContainer};