import {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {SetURLSearchParams} from "react-router-dom";

import {searchValidator} from "../../validators/SearchValidator";
import {useAppSelector} from "../../hooks/reduxHooks";
import css from './SearchPanel.module.css'

interface IProps {
    setQuery:SetURLSearchParams
}


const SearchPanel: FC<IProps> = ({setQuery}) => {
    const{register,handleSubmit,formState:{errors}} = useForm<{searchQuery:string}>({
        mode:"onBlur",
        resolver:joiResolver(searchValidator)
    })

    const{isDark}=useAppSelector(state => state.theme)

    const save:SubmitHandler<{searchQuery:string}> = ({searchQuery})=>{
        setQuery(prev => {
            prev.set('searchQuery',searchQuery)
            return prev
        })
    }


    return (
        <div className={`${css.SearchPanel} ${isDark?css.dark:css.light}`}>
            <form className={`${css.SearchForm} ${isDark?css.dark:css.light}`} onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'Your search request...'} {...register('searchQuery')}/>
                <button className={`${isDark?css.dark:css.light}`}>Search</button>
            </form>
            {errors.searchQuery&&<div>{errors.searchQuery.message}</div>}
        </div>
    );
};

export {SearchPanel};