<template>
    <div class="container mx-auto flex mt-20 border-b border-gray-600 pb-2">
        <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" class="w-64" alt="">
        <div class="ml-24">
            <h2 class="text-4xl font-semibold">{{ movie.title }}</h2>
            <span class="text-gray-500 text-sm flex mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5 fill-current text-yellow-300 mr-1">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg> {{ movie.vote_average * 10 }}% | {{ movie.release_date }}
                <span class="ml-2">{{
                    getGenresByIds(movie.genre_ids).join(', ') }}
                </span>
            </span>

            <p class="mt-5">{{ movie.overview }}
            </p>

            <div class="mt-5">
                <span class="mt-5">Featured Cast</span>

                <div class="flex">
                    <div class="flex flex-col mt-5 mr-5">
                        <span>Scott Silver</span>
                        <span class="text-gray-500">Writer</span>
                    </div>
                    <div class="flex flex-col mt-5">
                        <span>Bruce Berman</span>
                        <span class="text-gray-500">Executive Tradision</span>
                    </div>
                </div>

            </div>
            <div class="mt-5">
                <a href="/" class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>


                    <span class="ml-4 ">Play Trailer</span>
                </a>

                <a href="/" class="rounded bg-yellow-500 px-5 py-3 inline-flex text-black ml-5">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>



                    <span class="ml-4 ">Favourite</span>
                </a>
            </div>
        </div>
    </div>

    <Cast />

    <Images />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Cast from '../components/Cast.vue'
import Images from '../components/Images.vue'
import Companies from '../components/Companies.vue'

export default {
    components: {
        Cast,
        Images,
        Companies
    },
    computed: {
        ...mapGetters("movie", ["getMovieDetail"]),
        movie() {
            return this.getMovieDetail(Number(this.$route.params.id));
        },

        ...mapGetters('genre', ['getGenres'])
    },
    methods: {
        ...mapActions("movie", ["fetchMovieDetail"]),
        ...mapActions('movie', ['fetchMovies']),

        ...mapActions('genre', ['fetchGenres']),
        getGenresByIds(genreIds) {
            if (this.getGenres.length === 0) {
                return [];
            }

            return genreIds.map(id => {
                const genre = this.getGenres.find(genre => genre.id === id);
                return genre ? genre.name : '';
            });
        }
    },
    beforeMount() {
        this.fetchMovies()
        const movieId = this.$route.params.id;
        this.fetchMovieDetail(movieId);
    },
    mounted() {
        const movieId = this.$route.params.id;
        this.fetchMovieDetail(movieId);
    },
    created() {
        this.fetchGenres();
    }


}
</script>