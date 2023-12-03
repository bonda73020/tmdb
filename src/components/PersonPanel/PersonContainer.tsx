import {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {personSearchActions} from "../../redux/slices/personSearchSlice";
import css from './PersonPanel.module.css'
import {PersonCard} from "./PersonCard";
interface IProps {
    query:URLSearchParams
}


const PersonContainer: FC<IProps> = ({query}) => {
    const{searchResults}=useAppSelector(state =>state.personSearch)
    const {isDark}=useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(query.get('searchQuery')){
            dispatch(personSearchActions.getResults({searchQuery:query.get('searchQuery'),page:+query.get('page')}))
        }
        else{
            dispatch(personSearchActions.reset())
        }
    }, [dispatch,query]);


    return (
        <div className={`${css.PersonContainer} ${isDark?css.dark:css.light}`}>
            {!query.get('searchQuery')&&<h1>Enter your request</h1>}
            {searchResults&&searchResults.map(i=><PersonCard key={i.id} person={i}/>)}
        </div>
    );
};

export {PersonContainer};