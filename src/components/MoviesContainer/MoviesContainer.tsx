import React, {useEffect, useState} from 'react';
import {Movies} from "./Movies";
import {useLocation, useSearchParams} from "react-router-dom";
import {Paginator} from "../Paginator/Paginator";
import {GenresPanel} from "../GenresPanel/GenresPanel";
import {SortByPanel} from "../SortBy/SortByPanel";
import {SearchPanel} from "../SearchPanel/SearchPanel";

const MoviesContainer = () => {

    const [query,setQuery] = useSearchParams({'page':'1',sortBy:'popularity',sortDirection:'desc',searchQuery:''})

    const location = useLocation()
    const [isSearch, setIsSearch] = useState<boolean>(false)

    useEffect(() => {
        setIsSearch(query.get('searchQuery')!=='')

    }, [query]);

    return (
        <div>
            {location.pathname==='/search'&&<SearchPanel setQuery={setQuery}></SearchPanel>}
            {location.pathname==='/genres'&&<GenresPanel query={query} setQuery={setQuery}></GenresPanel>}
            {!isSearch&&<SortByPanel setQuery={setQuery} query={query}></SortByPanel>}
            <Paginator query={query} setQuery={setQuery}></Paginator>
            <Movies setQuery={setQuery} query={query}></Movies>
            <Paginator query={query} setQuery={setQuery}></Paginator>
        </div>
    );
};

export {MoviesContainer};