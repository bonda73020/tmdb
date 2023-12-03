import {FC} from 'react';
import {SetURLSearchParams} from "react-router-dom";

import css from './SortByPanel.module.css'
import {useAppSelector} from "../../hooks/reduxHooks";

interface IProps {
    query:URLSearchParams
    setQuery:SetURLSearchParams
}


const SortByPanel: FC<IProps> = ({query,setQuery}) => {

    const sortOptions = ['Popularity','Revenue','Release Date','Vote average','Vote count']

    const{isDark}= useAppSelector(state => state.theme)

    const convertString=(a:string):string=>{
        return a.toLowerCase().replace(/\s+/g,'_')
    }


    const changeSortOption=(i:string)=>{
        setQuery(prev => {
            prev.set('sortBy',convertString(i))
            return prev
        })
    }

    const changeSortDirection=()=>{
        setQuery(prev => {
            const prevDir = prev.get('sortDirection')
            prev.set('sortDirection',(prevDir==='asc'?'desc':'asc'))
            return prev
        })
    }

    return (
        <div className={`${css.SortByPanel} ${isDark?css.dark:css.light}`}>
            <div>
                {sortOptions.map(i=><div onClick={()=>changeSortOption(i)} key={i} className={query.get('sortBy')===convertString(i)?css.active:''}>{i}</div>)}
            </div>
            <div>
                <div onClick={()=>changeSortDirection()}><div className={query.get('sortDirection')==='desc'?'':css.flip}>▼</div></div>
            </div>
        </div>
    );
};

export {SortByPanel};