import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {MoviePage} from "./pages/MoviePage";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
import {PersonPage} from "./pages/PersonPage";
import {PersonsPage} from "./pages/PersonsPage";
import {SearchPage} from "./pages/SearchPage";

const router = createBrowserRouter([
    {path:'',element:<MainLayout/>,children:[
            {index:true,element:<Navigate to={'movies'}/>},
            {path:'movies',element:<MoviesPage/>},
            {path:'movies/:movieId',element:<MoviePage/>},
            {path:'genres',element:<GenresPage/>},
            {path:'people',element:<PersonsPage/>},
            {path:'people/:personId',element: <PersonPage/>},
            {path:'search',element:<SearchPage/>}
        ]}
])

export {router}