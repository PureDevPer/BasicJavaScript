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
    setTimeout( () => {
      this.setState({
        movies:[
          {
            title: "Matrix",
            images: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
          },
          {
            title: "007",
            images: "https://images-na.ssl-images-amazon.com/images/I/61hDTk8M6YL._SY679_.jpg"
          },
          {
            title: "Avengers",
            images: "https://cnet2.cbsistatic.com/img/ZVJKdjD7OnLkaq07pz50JdmYCWo=/1600x900/2018/04/18/7d739d34-6ca7-484a-a9e2-73f4ff44878d/capture1.png"
          },
          {
            title: "Spider-Man",
            images: "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP9000-CUSA02299_00-MARVELSSPIDERMAN/1557246610000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000"
          }
        ]
      })
    }, 1000)
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
