import axios from "axios";

const movie = {
    namespaced: true,
    state: {
        movies: [],
        movieDetail: []
    },
    getters: {
        getMovies: (state) => state.movies,
        getMovieDetail: (state) => (movieId) => {
            const movie = state.movies.find((p) => p.id == movieId);
            return movie;
        },
    },
    actions: {
        async fetchMovies({ commit }) {
            try {
                const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZmZjAxM2I1MWYyOWEyOTczMTk1OWIxNjNiMjhjZSIsInN1YiI6IjY0ZDc0Mzg2ZjQ5NWVlMDI5MjRlYTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N15ImmtuMyEkaWP2zqGX34WX_ilPJwnze_qqizRtd3Q";
                const dataMovies = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                commit('SET_MOVIES', dataMovies.data['results'])
            } catch (error) {
                console.log(error)
            }
        },

        async fetchMovieDetail({ commit }, movieId) {
            try {
                const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZmZjAxM2I1MWYyOWEyOTczMTk1OWIxNjNiMjhjZSIsInN1YiI6IjY0ZDc0Mzg2ZjQ5NWVlMDI5MjRlYTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N15ImmtuMyEkaWP2zqGX34WX_ilPJwnze_qqizRtd3Q";
                const detailMovies = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits,videos,images`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                commit('SET_MOVIE_DETAIL', detailMovies)
            } catch (error) {
                console.log(error)
            }
        },
    },
    mutations: {
        SET_MOVIES(state, movies) {
            state.movies = movies;
        },
        SET_MOVIE_DETAIL(state, movies) {
            state.movieDetail = movies;
        }
    }
}

export default movie;