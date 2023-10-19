import axios from "axios";

const genre = {
    namespaced: true,
    state: {
        genres: []
    },
    getters: {
        getGenres: (state) => state.genres
    },
    actions: {
        async fetchGenres({ commit }) {
            try {
                const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZmZjAxM2I1MWYyOWEyOTczMTk1OWIxNjNiMjhjZSIsInN1YiI6IjY0ZDc0Mzg2ZjQ5NWVlMDI5MjRlYTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N15ImmtuMyEkaWP2zqGX34WX_ilPJwnze_qqizRtd3Q";
                const dataGenre  = await axios.get("https://api.themoviedb.org/3/genre/movie/list?language=en", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                commit('SET_GENRES', dataGenre.data['genres']);
            } catch (error) {
                console.error(error);
            }
        }
    },
    mutations: {
        SET_GENRES(state, genres) {
            state.genres = genres;
        }
    }
};

export default genre;
