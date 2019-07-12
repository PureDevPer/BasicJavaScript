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
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( (movie) => {
      console.log(movie)
      return <Movie title={movie.title} images = {movie.large_cover_image} key={movie.id} />
    })
    return movies
  }

   _getMovies = async () => {
     // Wait until _callApi function finishes
    const movies = await this._callApi()
    this.setState({
      // movies : movies
      movies
    })
  }

  _callApi = async () => {
    // Can check promises
    //console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'))
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    //.then(response => console.log(response))
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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
