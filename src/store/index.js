import { createStore } from "vuex";

// API State Management
import movie from "./modules/movie";
import genre from "./modules/genre";
import tv from "./modules/tv";
import tvTopRated from "./modules/topRatedtv";

const store = createStore({
    state: {
      isLoading: false,
    },
    modules: {
        movie,
        genre,
        tv,
        tvTopRated
    },
});
  
export default store;