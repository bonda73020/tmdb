import {IResType} from "../types/IResType";
import {IMoviePage} from "../interfaces/IMoviePage";
import {moviesAxiosService} from "./axiosService";
import {urls} from "../constants/urls";


interface getPageParams{
    page:number,
    genres:string,
    sortBy:string
}

const movieService = {
    getPage:({page=1,genres='',sortBy=''}:getPageParams):IResType<IMoviePage>=>moviesAxiosService.get(urls.moviesPage,{params:{page:page,genres:genres,sort_by:sortBy}})
}

export {
    movieService
}
export type {getPageParams}