import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// Render
// Component -> Render -> Return -> HTML


// functional Component - No component, so no render, no update
function Movie({title, images}){
    return(
            <div>
                <MoviePoster images={images} />
                <h1>{title}</h1>
            </div>
    )
}

function MoviePoster({images}){
    return (
        <img src={images} alt="Movie Poster"></img>
    )
}

// propTypes: The filed of the function component
// PropTypes: Library

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    images: PropTypes.string.isRequired
}

export default Movie