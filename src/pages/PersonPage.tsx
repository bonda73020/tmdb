import React from 'react';

import {PersonInfoContainer} from "../components/PersonInfo/PersonInfoContainer";

const PersonPage = () => {
    window.scrollTo(0,0)
    return (
        <div>
        <PersonInfoContainer></PersonInfoContainer>
        </div>
    );
};

export {PersonPage};