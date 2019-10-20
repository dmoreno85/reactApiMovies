import axios from 'axios'

class movieService {
    constructor() {
        this.callsDone = 0;
        this.ApiKey = '57100bbbe8d760beada498e98fb84066'
    }

    async getMoviesService(category, page = '1') {
        this.callsDone++;
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=${this.ApiKey}&language=es-ES&page=${page}`);
        return data;
        };


        async getMovieId(id){
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.ApiKey}&language=es-ES`);
        return data;
        };

    howManyCalls() {
        return this.callsDone;
    }


}

export default new movieService();