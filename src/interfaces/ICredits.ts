import {IPerson} from "./IPerson";

export interface ICredits{
    id:number,
    cast:IPerson[],
    crew:IPerson[]
}