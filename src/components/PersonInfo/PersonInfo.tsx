import {FC} from 'react';
import {IPerson} from "../../interfaces/IPerson";
import {imagesURL} from "../../constants/urls";
import css from './PersonInfo.module.css'
import {Movie} from "../MoviesContainer/Movie";

interface IProps {
    person:IPerson
}


const PersonInfo: FC<IProps> = ({person}) => {
    const {name,profile_path,gender,original_name,known_for_department, known_for,biography,birthday,place_of_birth} = person
    console.log(known_for)
    const genders=['Not set / not specified','Female','Male','Non-binary']

    return (
        <div className={css.PersonInfo}>
            <div className={css.topPanel}>
                <div className={css.leftPanel}>
                    <h1>{name}</h1>
                    {profile_path&&<img src={`${imagesURL}${profile_path}`} alt={name}/>}
                </div>
                <div className={css.rightPanel}>
                    <div>
                        <div>Department: {known_for_department}</div>
                        <div>Gender: {genders[gender]}</div>
                        {place_of_birth&&<div>Origin: {place_of_birth}</div>}
                        {birthday&&<div>Birthday: {birthday}</div>}
                    </div>
                    {biography&&<div>{biography}</div>}
                </div>

            </div>

            {known_for&&(
                <div>
                    <h3>Known for:</h3>
                    {known_for.map(i=><Movie movie={i}/>)}
                </div>
            )}
        </div>
    );
};

export {PersonInfo};