import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// Render
// Component -> Render -> Return -> HTML

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        images: PropTypes.string.isRequired
    }

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

    static propTypes = {
        images: PropTypes.string.isRequired
    }

    render(){
        //console.log(this.props);
        return (
            <img src={this.props.images} alt="Movie Poster"></img>
        )
    }
}

export default Movie