<template>
    <div class="container mx-auto border-b border-gray-600 px-4 py-4">
        <h2 class="text-4xl font-semibold mb-5">Cast</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap gap-8">
            <div v-for="actor in cast" :key="actor.id" class="mr-2">
                <img :src="'https://image.tmdb.org/t/p/w500' + actor.profile_path"
                    class="w-64 hover:opacity-75 transition easy-in-out duration-150" :alt="actor.name">
                <span class="text-gray-300">{{ actor.name }} as {{ actor.character }}</span>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            cast: []
        };
    },
    methods: {
        async fetchCast() {
            try {
                const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZmZjAxM2I1MWYyOWEyOTczMTk1OWIxNjNiMjhjZSIsInN1YiI6IjY0ZDc0Mzg2ZjQ5NWVlMDI5MjRlYTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N15ImmtuMyEkaWP2zqGX34WX_ilPJwnze_qqizRtd3Q";
                const seriesId = this.$route.params.id;
                const response = await axios.get(
                    `https://api.themoviedb.org/3/tv/${seriesId}/credits?language=en-US`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );
                this.cast = response.data.cast
            } catch (error) {
                console.error(error);
            }
        }
    },
    created() {
        this.fetchCast();
    }
};
</script>
  