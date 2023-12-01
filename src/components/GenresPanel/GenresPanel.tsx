import {FC, useEffect} from 'react';
import {SetURLSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {genreActions} from "../../redux/slices/genresSlice";
import {GenresLabel} from "./GenresLabel";
import css from './GenresPanel.module.css'

interface IProps {
    query:URLSearchParams,
    setQuery:SetURLSearchParams
}


const GenresPanel: FC<IProps> = ({query,setQuery}) => {

    const{genres} = useAppSelector(state => state.genres)
    const {isDark} = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, [dispatch]);

    const genresList:string[] = query.get('genres')?query.get('genres').split(','):[]

    useEffect(() => {
        const genresList:string[] = query.get('genres')?query.get('genres').split(','):[]
    }, [query]);

    const updateGenres=(i:number)=>{
        const genresList:string[] = query.get('genres')?query.get('genres').split(','):[]
        if (genresList.includes(`${i}`)){
            setQuery(prev =>{
                prev.set('genres',genresList.filter(item => item !== `${i}`).join(','))
                return prev
            })
        }
        else{
            genresList.push(`${i}`)
            setQuery(prev =>{
                prev.set('genres',genresList.join(','))
                return prev
            })
        }


    }


    return (
        <div className={`${css.GenresPanel} ${isDark?css.dark:css.light}`}>
            {genres.map(i=><GenresLabel updateGenres={updateGenres} active={genresList.includes(`${i.id}`)} genre={i} key={i.id}/>)}
        </div>
    );
};

export {GenresPanel};