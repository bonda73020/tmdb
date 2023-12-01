import {IMovie} from "./IMovie";

export interface IPerson{
    adult:boolean,
    gender:number,
    id:number,
    known_for_department:string,
    name:string,
    original_name:string,
    popularity:number,
    profile_path:string,
    known_for:IMovie[],
    biography?:string,
    place_of_birth?:string,
    birthday?:string
}