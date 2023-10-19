<template>
    <div class="flex">
        <div class="relative mr-3 md:mr-0 hidden md:block">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <input type="text" id="email-adress-icon"
                class="bg-gray-600 text-gray-300 sm:text-sm rounded-full focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2"
                placeholder="Search...">
        </div>

        <div v-if="false" class="absolute mt-12 ml-2 rounded bg-gray-600 w-48">
            <ul class="mt-3">
                <li class="flex items-center border-b border-gray-500 p-1">
                    <img src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
                        class="w-12" alt="">
                    <span class="ml-3">Joker</span>
                </li>
            </ul>
        </div>

        <img src="https://i.pinimg.com/736x/43/09/16/430916f7c43f35f0a63e74b318793064.jpg" class="h-10 rounded-full ml-4"
            alt="">
    </div>
</template>
