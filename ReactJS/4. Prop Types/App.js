import React from 'react';
import './App.css';
import Movie from './Movie';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const movies = [
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
  }
]

function App() {
  return (
    <div className="App">
      {movies.map( (movie, index) => {
        return <Movie title={movie.title} images = {movie.images} key={index} />
      })}
    </div>
  );
}

export default App;
