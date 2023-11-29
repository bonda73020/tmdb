import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviePage} from "./pages/MoviePage";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
import {ActorPage} from "./pages/ActorPage";
import {ActorsPage} from "./pages/ActorsPage";
import {SearchPage} from "./pages/SearchPage";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {index:true,element:<Navigate to={'movies'}/>},
            {path:'movies',element:<MoviesPage/>,children:[
                    {path:':movieId',element:<MoviePage/>}
                ]},
            {path:'genres',element:<GenresPage/>},
            {path:'actors',element:<ActorsPage/>,children:[
                    {path:':actorId',element: <ActorPage/>}
                ]},
            {path:'search',element:<SearchPage/>}
        ]}
])

export {router}