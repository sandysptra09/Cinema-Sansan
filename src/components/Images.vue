<template>
    <div class="container mx-auto border-b border-gray-600 px-4 py-4">
        <h2 class="text-4xl font-semibold mb-5">
            Gallery of Movies
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap gap-8">
            <div v-for="image in images" :key="image.id" class="mr-2">
                <img :src="'https://www.themoviedb.org/t/p/w500_and_h282_face' + image.file_path"
                    class="hover:opacity-75 transition easy-in-out duration-150" :alt="image.file_path">
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            images: []
        };
    },
    methods: {
        async fetchImages() {
            try {
                const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZmZjAxM2I1MWYyOWEyOTczMTk1OWIxNjNiMjhjZSIsInN1YiI6IjY0ZDc0Mzg2ZjQ5NWVlMDI5MjRlYTdjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N15ImmtuMyEkaWP2zqGX34WX_ilPJwnze_qqizRtd3Q";
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}/images`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const allImages = response.data.backdrops;
                const shuffledImages = allImages.sort(() => 0.5 - Math.random());

                this.images = shuffledImages.slice(0, 16);
            } catch (error) {
                console.error(error);
            }
        }
    },
    created() {
        this.fetchImages();
    }
};
</script>
  