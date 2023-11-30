import React from 'react';
import {Movies} from "./Movies";
import {useSearchParams} from "react-router-dom";
import {Paginator} from "../Paginator/Paginator";

const MoviesContainer = () => {

    return (
        <div>
            <Paginator></Paginator>
            <Movies></Movies>
            <Paginator></Paginator>
        </div>
    );
};

export {MoviesContainer};