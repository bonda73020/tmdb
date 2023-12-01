const moviesBaseURL = 'https://api.themoviedb.org'
const imagesURL = "https://image.tmdb.org/t/p/w1280"


const moviesPage = '/3/discover/movie'

const genres = "/3/genre/movie/list"

const findByIdPage = '3/movie'
const credits = '/credits'
const search = '3/search/movie'
const personSearch = "/3/search/person"
const personById=(id:string)=>'3/person/'+id
const urls = {
    moviesPage:moviesPage,
    movieById:(id:string):string=>`${findByIdPage}/${id}`,
    genres:genres,
    creditsById:(id:string):string=>`${findByIdPage}/${id}/${credits}`,
    search:search,
    personSearch,
    personById
}


export {
    moviesBaseURL,
    urls,
    imagesURL
}