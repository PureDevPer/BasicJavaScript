import React, { Component } from 'react';
import './Movie.css';

// Render
// Component -> Render -> Return -> HTML

class Movie extends Component{
    render(){
        //console.log(this.props);
        return(
            <div>
                <MoviePoster images={this.props.images} />
                <h1>{this.props.title}</h1>
            </div>
            
        )
    }
}


class MoviePoster extends Component{
    render(){
        console.log(this.props);
        return (
            <img src={this.props.images}></img>
        )
    }
}

export default Movie