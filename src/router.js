import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home";
import Details from "./components/Details";
import TvDetails from "./components/TvDetails";
import MoGenres from "./components/MoGenres";
import SearchResult from "./components/MovieLists/SearchResult";
import Movies from "./components/MovieLists/Movies.vue";
import Serieses from "./components/MovieLists/Serieses";

const routes = [
    {
        name:'home',
        component:Home,
        path:'/'
    },
    {
        name:'details',
        component:Details,
        path:'/details/:id'
    },
    {
        name:'tvdetails',
        component:TvDetails,
        path:'/tvdetails/:id'
    },
    {
        name:'genres',
        component:MoGenres,
        path:'/genres/:id'
    },
    {
        name:'results',
        component:SearchResult,
        path:'/results/search'
    },
    {
        name:'series',
        component:Serieses,
        path:'/series'
    },
    {
        name:'movies',
        component:Movies,
        path:'/movies'
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router