import {IMovie} from "./IMovie";

export interface IPerson {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    known_for: IMovie[];
    also_known_as?: string[];
    biography?: string;
    birthday?: string;
    deathday?: string | null;
    homepage?: string | null;
    imdb_id?: string;
    place_of_birth?: string;
}
