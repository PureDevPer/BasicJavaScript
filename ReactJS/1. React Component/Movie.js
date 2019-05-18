import React, { Component } from 'react';
import './Movie.css';

// Render
// Component -> Render -> Return -> HTML

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h1>hello this is a movie</h1>
            </div>
            
        )
    }
}


class MoviePoster extends Component{
    render(){
        return (
            <img src="https://images-na.ssl-images-amazon.com/images/I/61hDTk8M6YL._SY679_.jpg"></img>
        )
    }
}

export default Movie