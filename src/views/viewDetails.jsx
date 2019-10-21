import React from 'react'
import movieService from '../services/movie.Service'
class viewDetails extends React.Component {


    state = {
        movie: null,
    };
    constructor(props) {
        super(props);
        this.componentDidMount = this.getMovie;
        this.componentDidUpdate = this.getMovie;
    }


    async getMovie() {
        const currentId = this.props.match.params.id;
        // console.log(this.props.match.params.id)
        if (currentId !== this.state.currentId) {

            try {
                const data = await movieService.getMovieId(currentId);
                console.log('hey');
                this.setState({
                    movie: data,
                    currentId,
                })

            } catch (error) {
                this.setState({
                    currentId,
                })
                console.log('esto es un error' + error)
            }


        }

    }


    render() {
        const movie = this.state.movie
        console.log(movie)
        return (
            <div className="ViewDetails">
            {movie && (
                <div> {movie.title}</div>
            )}
             

            </div>
        )
    }
}


export default viewDetails;