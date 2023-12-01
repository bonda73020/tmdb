import {IPerson} from "./IPerson";

export interface IPersonSearchPage{
    page:number,
    results:IPerson[],
    total_pages:number,
    total_results:number
}