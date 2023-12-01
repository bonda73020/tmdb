import {FC} from 'react';
import {IPerson} from "../../interfaces/IPerson";
import {imagesURL} from "../../constants/urls";
import css from './PersonPanel.module.css'
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/reduxHooks";
import {personActions} from "../../redux/slices/personSlice";
interface IProps {
    person:IPerson
}


const PersonCard: FC<IProps> = ({person}) => {
    const {name,id,profile_path, known_for_department}=person
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleClick=()=>{
        dispatch(personActions.setInitialInfo(person))
        navigate(`${id}`)
    }


    return (
        <div onClick={()=>handleClick()} className={css.PersonCard}>
            {profile_path&&<img alt={name} src={`${imagesURL}${profile_path}`}></img>}
            <div>{name}</div>
            <div>{known_for_department}</div>
        </div>
    );
};

export {PersonCard};