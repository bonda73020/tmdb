import axios from "axios";
import {token} from "../constants/token";
import {moviesBaseURL} from "../constants/urls";


const headers = {
    Authorization: `Bearer ${token}`
}

const moviesAxiosService = axios.create({baseURL:moviesBaseURL,headers})

export {
    moviesAxiosService
}