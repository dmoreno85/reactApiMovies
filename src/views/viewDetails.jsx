import React from 'react'
import movieService from '../services/movie.Service'
class viewDetails extends React.Component{
    constructor(props) {
        super(props);
        this.componentDidMount = this.getMovies;
        this.componentDidUpdate = this.getMovies;
        this.state = {
            movies: [],
            current: "",
        }
    }


    getMovies() {

    }


  render()  {return (
        <div className="ViewDetails">
            <span>Details</span>
        </div>
    )}
}


export default viewDetails;