import React, { Component }  from 'react';
import './App.css';
import Movie from './Movie';


// Render: componentWillMount() -> render() -> componentDidMount()

// Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate()
//          -> render() -> component

// shouldComponentUpdate(): check if new props are updated or not. Return true/false



class App extends Component {
  
  state = {
  
  }

  componentDidMount(){
    console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie, index) => {
      return <Movie title={movie.title} images = {movie.images} key={index} />
    })
    return movies
  }

  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
