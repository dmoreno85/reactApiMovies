import React from 'react'
import movieService from '../services/movie.Service'
import MoviesList from '../components/moviesList';

class viewCategory extends React.Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.getMovies;
        this.componentDidUpdate = this.getMovies;
        this.state = {
            movies: [],
            current: "",
        }
    }
    // componentDidMount() {
    //     this.getMovies();
    // };
    // componentDidUpdate() {
    //     this.getMovies();
    // };

    getMovies(data) {

        const current = this.props.match.params.categoryName;
        if (current !== this.state.current) {
            movieService.getMoviesService(current)
                .then(data => { this.setState({ movies: data.results, current }) })

        }

    }


    render() {
        return (
            <div className="viewCategory">
                <div className="cards">
                    <MoviesList movies={this.state.movies}/>
                </div>
                {/* <pre>{JSON.stringify(this.state.movies, null, 2)}</pre> */}
            </div>
        )
    }
}



export default viewCategory;