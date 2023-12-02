import {IResType} from "../types/IResType";
import {IMoviePage} from "../interfaces/IMoviePage";
import {moviesAxiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IGenre} from "../interfaces/IGenre";
import {IPersonSearchPage} from "../interfaces/IPersonSearchPage";
import {IPerson} from "../interfaces/IPerson";
import {IMovie} from "../interfaces/IMovie";
import {ICredits} from "../interfaces/ICredits";


interface getPageParams{
    page:number,
    genres?:string,
    sortBy?:string,
    searchQuery?:string
}

const movieService = {
    getPage:({page=1,genres='',sortBy=''}:getPageParams):IResType<IMoviePage>=>moviesAxiosService.get(urls.moviesPage,{params:{page:page,with_genres:genres,sort_by:sortBy}}),
    getGenres:():IResType<{genres:IGenre[]}>=>moviesAxiosService.get(urls.genres),
    searchByQuery:({searchQuery='',page=1}:getPageParams):IResType<IMoviePage>=>moviesAxiosService.get(urls.search,{params:{query:searchQuery,page:page}}),
    searchPerson:({searchQuery='',page=1}):IResType<IPersonSearchPage>=>moviesAxiosService.get(urls.personSearch,{params:{query:searchQuery,page:page}}),
    getPersonInfo:(id:string):IResType<IPerson>=>moviesAxiosService.get(urls.personById(id)),
    getMovieInfo:(id:string):IResType<IMovie>=>moviesAxiosService.get(urls.movieById(id)),
    getMovieCredits:(id:string):IResType<ICredits>=>moviesAxiosService.get(urls.creditsById(id))
}

export {
    movieService
}
export type {getPageParams}