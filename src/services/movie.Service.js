import axios from 'axios'

class movieService {
    constructor() {
        key = '57100bbbe8d760beada498e98fb84066'
        this.callsDone = 0;
    }

    async getMovies(category, page = '1') {
        this.callsDone++;
        return await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${this.APIKEY}&language=es-ES&page=${page}`)
    }

    howManyCalls() {
        return this.callsDone;
    }




}

export default new movieService();