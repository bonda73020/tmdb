import {IResType} from "../types/IResType";
import {IMoviePage} from "../interfaces/IMoviePage";
import {moviesAxiosService} from "./axiosService";
import {urls} from "../constants/urls";

const movieService = {
    getPage:():IResType<IMoviePage>=>moviesAxiosService.get(urls.moviesPage)
}

export {
    movieService
}