import {FC} from 'react';
import {IGenre} from "../../interfaces/IGenre";
import css from './GenresPanel.module.css'
interface IProps {
    updateGenres:(i:number)=>void
    genre:IGenre,
    active:boolean
}


const GenresLabel: FC<IProps> = ({genre,updateGenres,active}) => {
    const {name,id}=genre
    return (
        <div onClick={()=>updateGenres(id)} className={`${css.GenresLabel} ${active?css.active:''}`}>
            {name}
        </div>
    );
};

export {GenresLabel};