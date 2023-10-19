import axios from "axios";

const tvTopRated = {
    namespaced: true,
    state: {
        tvTopRated: [],
        // tvDetail: []
    },
    getters: {
        getTVrated: (state) => state.tvTopRated,
        // getTVDetail: (state) => (seriesId) => {
        //     const tv = state.tvs.find((p) => p.id == seriesId);
        //     return tv;
        // },
    },
    actions: {
        async fetchTVsTopRated({ commit }) {
            try {
                const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZmZjAxM2I1MWYyOWEyOTczMTk1OWIxNjNiMjhjZSIsInN1YiI6IjY0ZDc0Mzg2ZjQ5NWVlMDI5MjRlYTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N15ImmtuMyEkaWP2zqGX34WX_ilPJwnze_qqizRtd3Q";
                const dataTVsPopulars = await axios.get("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                commit('SET_TV_TOP_RATED', dataTVsPopulars.data['results'])
            } catch (error) {
                console.log(error)
            }
        },

        // async fetchTVDetail({ commit }, seriesId) {
        //     try {
        //         const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZmZjAxM2I1MWYyOWEyOTczMTk1OWIxNjNiMjhjZSIsInN1YiI6IjY0ZDc0Mzg2ZjQ5NWVlMDI5MjRlYTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N15ImmtuMyEkaWP2zqGX34WX_ilPJwnze_qqizRtd3Q";
        //         const detailTVs = await axios.get(`https://api.themoviedb.org/3/tv/${seriesId}language=en-US`, {
        //             headers: {
        //                 'Authorization': `Bearer ${token}`
        //             }
        //         })
        //         commit('SET_TV_DETAIL', detailTVs)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // },
    },
    mutations: {
        SET_TV_TOP_RATED(state, tvTopRated) {
            state.tvTopRated = tvTopRated;
        },
        // SET_TV_DETAIL(state, tvs) {
        //     state.tvDetail = tvs;
        // }
    }
}

export default tvTopRated;