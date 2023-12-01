import React from 'react';
import {SearchPanel} from "../components/SearchPanel/SearchPanel";
import {useSearchParams} from "react-router-dom";
import {Paginator} from "../components/Paginator/Paginator";
import {PersonContainer} from "../components/PersonPanel/PersonContainer";

const PersonsPage = () => {
    const [query,setQuery] = useSearchParams({'page':'1'})
    return (
        <div>
            <SearchPanel setQuery={setQuery}></SearchPanel>
            {query.get('searchQuery')&&<Paginator setQuery={setQuery} query={query}></Paginator>}
            <PersonContainer query={query}></PersonContainer>
            {query.get('searchQuery')&&<Paginator setQuery={setQuery} query={query}></Paginator>}
        </div>

    );
};

export {PersonsPage};