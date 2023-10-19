<template>
    <div class="mx-auto">

        <nav class="border-gray-200 px-2 mb-10 mt-4">
            <div class="container mx-auto flex flex-wrap items-center justify-between">
                <router-link to="/" class="flex">
                    <img src="https://i.imgur.com/SMA6PzO.png" class="h-10" alt="">
                </router-link>
                <div class="flex md:order-2">
                    <SearchbarComponent />
                    <button data-collapse-toggle="mobile-menu-3" type="button"
                        class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                        aria-controls="mobile-menu-3" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
                    <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <router-link to="/" class="md:bg-transparent text-white block pl-3 pr-4 py-2  md:p-0 rounded"
                                aria-current="page">Movies</router-link>
                        </li>
                        <li>
                            <a href="#"
                                class="hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0">Actors</a>
                        </li>
                        <li>
                            <a href="#"
                                class=" hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:p-0">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
import SearchbarComponent from '../components/SearchbarComponent.vue'

export default {
    components: {
        SearchbarComponent
    }
}
</script>