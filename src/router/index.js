import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import TVSeries from '../views/TVSeries.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        component: Movie
    },
    {
        path: '/tv/:id',
        name: 'TV',
        component: TVSeries
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router