import axios from "axios";

const tv = {
    namespaced: true,
    state: {
        tvs: [],
        tvDetail: []
    },
    getters: {
        getTVs: (state) => state.tvs,
        getTVDetail: (state) => (seriesId) => {
            const tv = state.tvs.find((p) => p.id == seriesId);
            return tv;
        },
    },
    actions: {
        async fetchTVs({ commit }) {
            try {
                const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZmZjAxM2I1MWYyOWEyOTczMTk1OWIxNjNiMjhjZSIsInN1YiI6IjY0ZDc0Mzg2ZjQ5NWVlMDI5MjRlYTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N15ImmtuMyEkaWP2zqGX34WX_ilPJwnze_qqizRtd3Q";
                const dataTVs = await axios.get("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                commit('SET_TVS', dataTVs.data['results'])
            } catch (error) {
                console.log(error)
            }
        },

        async fetchTVDetail({ commit }, seriesId) {
            try {
                const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZmZjAxM2I1MWYyOWEyOTczMTk1OWIxNjNiMjhjZSIsInN1YiI6IjY0ZDc0Mzg2ZjQ5NWVlMDI5MjRlYTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N15ImmtuMyEkaWP2zqGX34WX_ilPJwnze_qqizRtd3Q";
                const detailTVs = await axios.get(`https://api.themoviedb.org/3/tv/${seriesId}language=en-US`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                commit('SET_TV_DETAIL', detailTVs)
            } catch (error) {
                console.log(error)
            }
        },
    },
    mutations: {
        SET_TVS(state, tvs) {
            state.tvs = tvs;
        },
        SET_TV_DETAIL(state, tvs) {
            state.tvDetail = tvs;
        }
    }
}

export default tv;