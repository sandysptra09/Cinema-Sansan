<template>
    <div class="mt-12">
        <h1 class="uppercase mt-2 text-yellow-300 text-lg font-semibold">Popular TV Series</h1>

        <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-6 gap gap-4">
            <div v-for="tv in getTVs" :key="tv.id" class="max-w-sm rounded overflow-hidden shadow-lg mt-2">
                <router-link :to="{ name: 'TV', params: { id: tv.id } }">
                    <img :src="'https://image.tmdb.org/t/p/w500' + tv.poster_path"
                        class="w-full hover:opacity-75 transition easy-in-out duration-150" :alt="tv.name">
                    <div class="px-6 py-4">
                        <div class="font-semibold text-sm">{{ tv.name }}</div>
                        <div class="flex">
                            <p class="text-gray-700 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4 mt-1 fill-current text-yellow-300">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                            </p>
                            <section class="ml-2 mt-0.5 text-sm">{{ tv.vote_average * 10 }}% | {{ tv.first_air_date }}
                            </section>
                        </div>
                        <!-- <p class="text-sm text-gray-500 text-base">
                           <p>{{ getGenresByIds(tv.genre_ids).join(', ') }}</p>
                        </p> -->
                    </div>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('tv', ['getTVs']),
        ...mapGetters('genre', ['getGenres'])
    },
    methods: {
        ...mapActions('tv', ['fetchTVs']),
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
    created() {
        this.fetchTVs();
        this.fetchGenres();
    }
}

</script>